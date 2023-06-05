import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Position } from './position.entity';
import { Project } from './project.entity';

@Entity()
export class Experience {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  companyName: string;

  @OneToMany(() => Position, (position) => position.experience, {
    cascade: true,
  })
  positions: Position[];

  @OneToMany(() => Project, (project) => project.experience, {
    cascade: true,
  })
  projects: Project[];

  @Column()
  startDate: Date;

  @Column()
  endDate?: Date;
}
