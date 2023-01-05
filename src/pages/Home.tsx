import { ExperienceItem, ExperienceItemType } from '../components/ExperienceItem'
import { Section } from '../components/Section'

export const Home = () => {
  const experienceSection: { title: string; items: ExperienceItemType[] } = {
    title: 'Work experience',
    items: [
      {
        companyName: 'Enmacc GmbH',
        position: 'Junior Frontend Developer',
        startDate: new Date('2017-10-01'),
        endDate: new Date('2018-06-01'),
        techStack: ['Angular', 'TypeScript', 'RxJS', 'Ngrx'],
      },
      {
        companyName: 'Insparx GmbH',
        position: 'Frontend Developer',
        startDate: new Date('2018-06-01'),
        endDate: new Date('2019-06-01'),
        techStack: ['Angular', 'TypeScript'],
      },
      {
        companyName: 'TeleClinic GmbH',
        position: 'Frontend Developer',
        startDate: new Date('2019-06-01'),
        endDate: new Date('2021-06-01'),
        techStack: ['Angular', 'React', 'TypeScript'],
      },
    ],
  }

  return (
    <>
      <Section title={experienceSection.title} description="Some description">
        {experienceSection.items.map(({ companyName, position, startDate, endDate, techStack }) => (
          <ExperienceItem
            companyName={companyName}
            position={position}
            startDate={startDate}
            endDate={endDate}
            techStack={techStack}
          ></ExperienceItem>
        ))}
      </Section>
    </>
  )
}
