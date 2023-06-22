import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

import { Project, ProjectSchema } from './project.entity';
import { Position, PositionSchema } from './position.entity';
import { TechStack } from '../dto/create-experience.dto';

@Schema()
export class Experience extends Document {
  @Prop()
  companyName: string;

  @Prop({ type: [PositionSchema], default: [] })
  positions: Position[];

  @Prop({ type: [ProjectSchema], default: [] })
  projects: Project[];

  @Prop()
  startDate: Date;

  @Prop()
  endDate?: Date;

  @Prop([{ type: String, enum: TechStack, default: [] }])
  techStack?: TechStack[];
}

export const ExperienceSchema = SchemaFactory.createForClass(Experience);
