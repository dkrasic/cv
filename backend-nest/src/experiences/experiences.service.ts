import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { PaginationQueryDto } from '../common/dto/pagination-query.dto/pagination-query.dto';
import { Repository } from 'typeorm';
import {
  CreateExperienceDto,
  PositionDto,
  ProjectDto,
} from './dto/create-experience.dto';
import { UpdateExperienceDto } from './dto/update-experience.dto';
import { Experience } from './entities/experience.entity';
import { Position } from './entities/position.entity';
import { Project } from './entities/project.entity';

@Injectable()
export class ExperiencesService {
  constructor(
    @InjectRepository(Experience)
    private readonly experienceRepository: Repository<Experience>,
    @InjectRepository(Position)
    private readonly positionRepository: Repository<Position>,
    @InjectRepository(Project)
    private readonly projectRepository: Repository<Project>,
  ) {}

  findAll(paginationQuery: PaginationQueryDto) {
    const { limit, offset } = paginationQuery;

    return this.experienceRepository.find({
      relations: {
        positions: true,
        projects: true,
      },
      skip: offset,
      take: limit,
    });
  }

  async findOne(id: string) {
    const experience = await this.experienceRepository.findOne({
      where: { id: +id },
      relations: {
        positions: true,
        projects: true,
      },
    });
    if (!experience) {
      throw new NotFoundException(`Experience #${id} was not found.`);
    }

    return experience;
  }

  async create(createExperienceDto: CreateExperienceDto) {
    const newExperience = this.experienceRepository.create(createExperienceDto);
    return this.experienceRepository.save(newExperience);
  }

  async update(id: string, updateExperienceDto: UpdateExperienceDto) {
    const positions =
      updateExperienceDto.positions &&
      (await Promise.all(
        updateExperienceDto.positions.map((position) =>
          this.preloadPosition(position),
        ),
      ));

    const projects =
      updateExperienceDto.projects &&
      (await Promise.all(
        updateExperienceDto.projects.map((project) =>
          this.preloadProject(project),
        ),
      ));
    const experience = await this.experienceRepository.preload({
      id: +id,
      ...updateExperienceDto,
      positions,
      projects,
    });

    if (!experience) {
      throw new NotFoundException(`Experience #${id} was not found.`);
    }

    return this.experienceRepository.save(experience);
  }

  async remove(id: string) {
    const experience = await this.findOne(id);
    return this.experienceRepository.remove(experience);
  }

  private async preloadPosition(position: PositionDto): Promise<Position> {
    const existingPosition = await this.positionRepository.findOne({
      where: {
        title: position.title,
      },
    });

    if (existingPosition) {
      return {
        ...existingPosition,
        ...position,
      };
    }

    return this.positionRepository.create(position);
  }

  private async preloadProject(project: ProjectDto): Promise<Project> {
    const existingProject = await this.projectRepository.findOne({
      where: {
        client: project.client,
        title: project.title,
      },
    });

    if (existingProject) {
      return {
        ...existingProject,
        ...project,
      };
    }

    return this.projectRepository.create(project);
  }
}
