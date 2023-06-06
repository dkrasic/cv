import { Test, TestingModule } from '@nestjs/testing';
import {
  HttpServer,
  HttpStatus,
  INestApplication,
  ValidationPipe,
} from '@nestjs/common';
import * as request from 'supertest';
import { TypeOrmModule } from '@nestjs/typeorm';

import { ExperiencesModule } from '../../src/experiences/experiences.module';
import { HttpExceptionFilter } from '../../src/common/filters/http-exception/http-exception.filter';
import { TimeoutInterceptor } from '../../src/common/interceptors/timeout/timeout.interceptor';
import { CreateExperienceDto } from 'src/experiences/dto/create-experience.dto';

describe('[Feature] Experiences - /experiences', () => {
  let app: INestApplication;
  let httpServer: HttpServer;
  const experience = {
    companyName: 'Enmacc GmbH',
    positions: [],
    projects: [],
    startDate: new Date('10/16/2018'),
    endDate: new Date('06/01/2019'),
  };

  beforeAll(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [
        ExperiencesModule,
        TypeOrmModule.forRoot({
          type: 'postgres',
          host: 'localhost',
          port: 5433,
          username: 'postgres',
          password: 'pass123',
          database: 'postgres',
          autoLoadEntities: true,
          synchronize: true,
        }),
      ],
    }).compile();

    app = moduleFixture.createNestApplication();

    app.useGlobalPipes(
      new ValidationPipe({
        whitelist: true,
        forbidNonWhitelisted: true,
        transform: true,
        transformOptions: {
          enableImplicitConversion: true,
        },
      }),
    );
    app.useGlobalFilters(new HttpExceptionFilter());
    app.useGlobalInterceptors(new TimeoutInterceptor());

    await app.init();
    httpServer = app.getHttpServer();
  });
  it('Create [POST /]', () => {
    return request(httpServer)
      .post('/experiences')
      .send(experience as CreateExperienceDto)
      .expect(HttpStatus.CREATED)
      .then(({ body }) => {
        Object.keys(experience).forEach((key) => {
          console.log('experience[key]: ', experience[key]);
          console.log('body[key]: ', body[key]);
          if (experience[key] instanceof Date) {
            expect(new Date(body[key]).getTime()).toEqual(
              experience[key].getTime(),
            );
          } else {
            expect(body[key]).toEqual(experience[key]);
          }
        });
      });
  });
  it.todo('Get all [GET /]');
  it.todo('Get one [GET /:id]');
  it.todo('Update one [PATCH /:id]');
  it.todo('Delete one [DELETE /:id]');

  afterAll(async () => {
    app.close();
  });
});
