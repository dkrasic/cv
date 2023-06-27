import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { PaginationQueryDto } from 'src/common/dto/pagination-query/pagination-query.dto';
import { CreateExperienceDto } from './dto/create-experience.dto';
import { UpdateExperienceDto } from './dto/update-experience.dto';
import { Experience } from './entities/experience.entity';

@Injectable()
export class ExperiencesService {
  constructor(
    @InjectModel(Experience.name)
    private readonly experienceModel: Model<Experience>,
  ) {}

  findAll(paginationQuery: PaginationQueryDto) {
    const { limit, offset } = paginationQuery;
    return this.experienceModel.find().skip(offset).limit(limit).exec();
  }

  async findOne(id: string) {
    const experience = await this.experienceModel.findOne({ _id: id }).exec();
    if (!experience) {
      throw new NotFoundException(`Experience #${id} was not found.`);
    }

    return experience;
  }

  create(createExperienceDto: CreateExperienceDto) {
    const experience = new this.experienceModel(createExperienceDto);
    return experience.save();
  }

  async update(id: string, updateExperienceDto: UpdateExperienceDto) {
    const existingExperience = await this.experienceModel
      .findOneAndUpdate(
        { _id: id },
        { $set: updateExperienceDto },
        { new: true },
      )
      .exec();

    if (!existingExperience) {
      throw new NotFoundException(`Experience #${id} was not found.`);
    }
    return existingExperience;
  }

  async remove(id: string) {
    const experience = await this.findOne(id);
    return experience.deleteOne();
  }
}
