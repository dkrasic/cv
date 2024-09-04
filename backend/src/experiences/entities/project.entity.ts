import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

import { TechStack } from '../dto/create-experience.dto';

@Schema()
export class Project extends Document {
  @Prop()
  client: string;

  @Prop()
  title: string;

  @Prop()
  description: string;

  @Prop()
  startDate: Date;

  @Prop()
  endDate?: Date;

  @Prop([{ type: String, enum: TechStack }])
  techStack: TechStack[];
}

export const ProjectSchema = SchemaFactory.createForClass(Project);
