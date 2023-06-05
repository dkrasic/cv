import { Type } from 'class-transformer';
import {
  IsDate,
  IsEnum,
  IsOptional,
  IsString,
  ValidateNested,
} from 'class-validator';

export enum TechStack {
  JAVASCRIPT = 'JavaScript',
  TYPESCRIPT = 'TypeScript',
  CSS = 'CSS',
  SCSS = 'SCSS',
  STYLEDCOMPONENTS = 'StyledComponents',
  GLAMOROUS = 'Glamorous',
  EMOTIONJS = 'EmotionJS',
  HTML = 'HTML',
  HYPERSCRIPT = 'HyperScript',
  REACT = 'React',
  ANGULAR = 'Angular',
  NXJS = 'NxJS',
  RXJS = 'RxJS',
  NGRX = 'NgRx',
  JEST = 'Jest',
  KARMA = 'Karma',
  CYPRESS = 'Cypress',
  WEBDRIVERIO = 'WebDriverIO',
  AVA = 'AVA',
  NODEJS = 'NodeJS',
  EXPRESSJS = 'ExpressJS',
  NESTJS = 'NestJS',
  PHP = 'PHP',
  REDUX = 'Redux',
}

export class CreateExperienceDto {
  @IsString()
  readonly companyName: string;

  @ValidateNested({ each: true })
  @Type(() => PositionDto)
  positions: PositionDto[];

  @ValidateNested({ each: true })
  @Type(() => ProjectDto)
  projects: ProjectDto[];

  @IsDate()
  readonly startDate: Date;

  @IsDate()
  @IsOptional()
  readonly endDate: Date;
}

export class PositionDto {
  @IsString()
  readonly title: string;

  @IsString()
  readonly description: string;

  @IsDate()
  readonly startDate: Date;

  @IsDate()
  readonly endDate?: Date;
}

export class ProjectDto {
  @IsString()
  readonly client: string;

  @IsString()
  readonly title: string;

  @IsString()
  readonly description: string;

  @IsDate()
  readonly startDate: Date;

  @IsDate()
  readonly endDate?: Date;

  @IsEnum(TechStack, { each: true })
  readonly techStack: TechStack[];
}
