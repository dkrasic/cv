import { Type } from 'class-transformer';
import { IsDate, IsString } from 'class-validator';

export class CreateExperienceDto {
  @IsString()
  readonly companyName: string;

  readonly positions: Position[];
  // readonly projects: Project[];

  @IsDate()
  @Type(() => Date)
  readonly startDate: Date;

  @IsDate()
  @Type(() => Date)
  readonly endDate: Date;
}

export class Position {
  @IsString()
  readonly title: string;

  @IsString()
  readonly description: string;

  @IsDate()
  @Type(() => Date)
  readonly startDate: Date;

  @IsDate()
  @Type(() => Date)
  readonly endDate: Date;
}

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
