export type Technology = 'React' | 'Angular' | 'TypeScript' | 'NodeJS' | 'RxJS' | 'Ngrx' // to extend

export interface ExperienceItemType {
  companyName: string
  position: string
  startDate: Date
  endDate: Date | 'present'
  techStack: Technology[]
}
