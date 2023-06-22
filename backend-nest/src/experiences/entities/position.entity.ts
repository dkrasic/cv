import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class Position extends Document {
  @Prop()
  title: string;

  @Prop()
  description: string;

  @Prop()
  startDate: Date;

  @Prop()
  endDate?: Date;
}

export const PositionSchema = SchemaFactory.createForClass(Position);
