import { FC } from 'react'
import styled from 'styled-components'
import moment from 'moment'
import { Experience } from '../../GraphQL/types'

// ** Styles **
const ExperienceItemWrapper = styled.div`
  display: flex;
  flex-direction: column;

  &:not(:last-of-type) {
    margin-bottom: 1rem;
  }
`

const Period = styled.span`
  font-weight: bold;
  font-size: ${props => props.theme.fontSize.small};
  color: ${props => props.theme.colors.lightGrey};
  text-transform: uppercase;
`

const CompanyName = styled.span`
  font-weight: bold;
  font-size: ${props => props.theme.fontSize.medium};
  color: ${props => props.theme.colors.deepOrange};
  /* darkGrey: '#393939',
  lightGrey: '#6E6E6E',
  deepOrange: '#FF5A09',
  lightOrange: '#F38435',
  orangeYellow: '#FF9900', */
`

const Subtitle = styled.span`
  font-size: ${props => props.theme.fontSize.medium};
  color: ${props => props.theme.colors.lightOrange};
`

const TechStack = styled.span`
  font-size: ${props => props.theme.fontSize.small};
`

const Title = styled.span``

const Description = styled.span``

const Client = styled.span``

const SubSectionWrapper = styled.div`
  padding-left: 1rem;
  display: flex;
  flex-direction: column;
`

// ** Components **
export const ExperienceItem: FC<Experience> = ({
  companyName,
  positions,
  projects,
  startDate,
  endDate,
}) => {
  const getMonthYearFormat = (date: Date): string => {
    return moment(date).format('MMMM YYYY')
  }

  const getTimespanFromDates = (startDate: Date, endDate: Date): string => {
    return `${getMonthYearFormat(startDate)} - ${endDate ? getMonthYearFormat(endDate) : 'present'}`
  }

  return (
    <ExperienceItemWrapper>
      <Period>{getTimespanFromDates(startDate, endDate)}</Period>
      <CompanyName>{companyName}</CompanyName>
      {projects.length !== 0 && (
        <SubSectionWrapper>
          <Subtitle>Projects</Subtitle>
          {projects.map(
            (
              {
                client,
                title,
                description,
                startDate: projectStartDate,
                endDate: projectEndDate,
                techStack,
              },
              index
            ) => (
              <div key={index}>
                <Period>{getTimespanFromDates(projectStartDate, projectEndDate)}</Period>
                <Title>{title}</Title>
                {client && <Client>{client}</Client>}
                {description && <Description>{description}</Description>}
                <TechStack>{techStack.join(', ')}</TechStack>
              </div>
            )
          )}
        </SubSectionWrapper>
      )}

      {positions.length !== 0 && (
        <SubSectionWrapper>
          <Subtitle>Positions</Subtitle>
          {positions.map(
            (
              { title, description, startDate: positionStartDate, endDate: positionEndDate },
              index
            ) => (
              <div key={index}>
                <Period>{getTimespanFromDates(positionStartDate, positionEndDate)}</Period>
                <Title>{title}</Title>
                {description && <Description>{description}</Description>}
              </div>
            )
          )}
        </SubSectionWrapper>
      )}

      {/* <TextWithTooltip
        text="Technology stack"
        tooltipText={techStack.reduce<string>((tech, sum) => `${sum}, ${tech}`, '')}
      ></TextWithTooltip> */}
    </ExperienceItemWrapper>
  )
}
