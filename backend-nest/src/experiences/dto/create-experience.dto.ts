import { Type } from 'class-transformer';
import { IsDate, IsString } from 'class-validator';

export class CreateExperienceDto {
  @IsString()
  readonly companyName: string;
  // readonly positions: Position[];
  // readonly projects: Project[];

  @IsDate()
  @Type(() => Date)
  readonly startDate: Date;

  @IsDate()
  @Type(() => Date)
  readonly endDate: Date;
}
