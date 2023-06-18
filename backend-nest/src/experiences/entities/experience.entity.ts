import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';
import { Document, Schema as MongooseSchema } from 'mongoose';

import { Project } from './project.entity';
import { Position } from './position.entity';

@Schema()
export class Experience extends Document {
  @Prop()
  companyName: string;

  @Prop({ type: [{ type: MongooseSchema.Types.ObjectId, ref: 'Position' }] })
  positions: Position[];

  @Prop({ type: [{ type: MongooseSchema.Types.ObjectId, ref: 'Project' }] })
  projects: Project[];

  @Prop()
  startDate: Date;

  @Prop()
  endDate?: Date;
}

export const ExperienceSchema = SchemaFactory.createForClass(Experience);
