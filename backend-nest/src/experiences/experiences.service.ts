import { Injectable, NotFoundException } from '@nestjs/common';
import { Experience } from './entities/experience.entity';

@Injectable()
export class ExperiencesService {
  private experiences: Experience[] = [
    {
      id: '1',
      companyName: 'Netlight GmbH',
      startDate: new Date('01/07/2021'),
      endDate: 'present',
    },
  ];

  findAll() {
    return this.experiences;
  }

  findOne(id: string) {
    const experience = this.experiences.find((item) => item.id === id);
    if (!experience) {
      throw new NotFoundException(`Experience #${id} was not found.`);
    }

    return experience;
  }

  create(createExperienceDto: any) {
    this.experiences.push(createExperienceDto);
    return createExperienceDto;
  }

  update(id: string, updateExperienceDto: any) {
    const existingExperience = this.findOne(id);
    if (existingExperience) {
      // update
    }
  }

  remove(id: string) {
    const experienceIndex = this.experiences.findIndex(
      (item) => item.id === id,
    );

    if (experienceIndex >= 0) {
      this.experiences.splice(experienceIndex, 1);
    }
  }
}
