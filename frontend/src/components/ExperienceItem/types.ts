export interface Position {
  title: string
  description: string
  startDate: Date
  endDate: Date
}

export interface Project {
  client: string
  title: string
  description: string
  startDate: Date
  endDate: Date
  techStack: string[] // can be changed into union type
}

export interface Experience {
  companyName: string
  positions: Position[]
  projects: Project[]
  startDate: Date
  endDate: Date
}
