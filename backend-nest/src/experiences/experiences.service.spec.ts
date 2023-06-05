import { NotFoundException } from '@nestjs/common';
import { Test, TestingModule } from '@nestjs/testing';
import { getRepositoryToken } from '@nestjs/typeorm';
import { NotFoundError } from 'rxjs';
import { DataSource, Repository } from 'typeorm';
import { Experience } from './entities/experience.entity';
import { Position } from './entities/position.entity';
import { Project } from './entities/project.entity';
import { ExperiencesService } from './experiences.service';

type MockRepository<T = any> = Partial<Record<keyof Repository<T>, jest.Mock>>;
const createMockRepository = <T = any>(): MockRepository<T> => ({
  findOne: jest.fn(),
  create: jest.fn(),
});

describe('ExperiencesService', () => {
  let service: ExperiencesService;
  let experienceRepository: MockRepository;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        ExperiencesService,
        { provide: DataSource, useValue: {} },
        {
          provide: getRepositoryToken(Experience),
          useValue: createMockRepository(),
        },
        {
          provide: getRepositoryToken(Project),
          useValue: createMockRepository(),
        },
        {
          provide: getRepositoryToken(Position),
          useValue: createMockRepository(),
        },
      ],
    }).compile();

    service = module.get<ExperiencesService>(ExperiencesService);
    experienceRepository = module.get<MockRepository>(
      getRepositoryToken(Experience),
    );
  });

  describe('findOne', () => {
    describe('when experience with ID exists', () => {
      it('should return the experience object', async () => {
        const experienceId = '1';
        const expectedExperience = {};

        experienceRepository.findOne.mockReturnValue(expectedExperience);

        const experience = await service.findOne(experienceId);

        expect(experience).toEqual(expectedExperience);
      });
    });

    describe('otherwise', () => {
      it('should throw the "NotFoundException"', async () => {
        const experienceId = '1';
        experienceRepository.findOne.mockReturnValue(undefined);

        try {
          await service.findOne(experienceId);
          expect(false).toBeTruthy();
        } catch (error) {
          expect(error).toBeInstanceOf(NotFoundException);
          expect(error.message).toEqual(
            `Experience #${experienceId} was not found.`,
          );
        }
      });
    });
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
