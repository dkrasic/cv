import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { TechStack } from '../dto/create-experience.dto';
import { Experience } from './experience.entity';

@Entity()
export class Project {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  client: string;

  @Column()
  title: string;

  @Column()
  description: string;

  @Column()
  startDate: Date;

  @Column()
  endDate?: Date;

  @Column({
    type: 'enum',
    enum: TechStack,
    array: true,
    default: [TechStack.JAVASCRIPT],
  })
  techStack: TechStack[];

  @ManyToOne(() => Experience, (experience) => experience.positions)
  experience: Experience;
}
