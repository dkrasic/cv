import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ExperiencesModule } from './experiences/experiences.module';

@Module({
  imports: [
    ExperiencesModule,
    MongooseModule.forRoot('mongodb://localhost:27017/cv-database'),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
