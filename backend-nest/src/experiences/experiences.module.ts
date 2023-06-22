import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { Experience, ExperienceSchema } from './entities/experience.entity';
import { Position, PositionSchema } from './entities/position.entity';
import { Project, ProjectSchema } from './entities/project.entity';
import { ExperiencesController } from './experiences.controller';
import { ExperiencesService } from './experiences.service';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: Experience.name,
        schema: ExperienceSchema,
      },
      {
        name: Position.name,
        schema: PositionSchema,
      },
      {
        name: Project.name,
        schema: ProjectSchema,
      },
    ]),
  ],
  controllers: [ExperiencesController],
  providers: [ExperiencesService],
})
export class ExperiencesModule {}
