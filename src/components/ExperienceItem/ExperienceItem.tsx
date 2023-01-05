import { FC } from 'react'
import styled from 'styled-components'
import moment from 'moment'
import { ExperienceItemType } from './types'

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
  text-transform: uppercase;
`

const PositionAndCompany = styled.span`
  font-size: ${props => props.theme.fontSize.medium};
`

const TechStack = styled.span`
  font-size: ${props => props.theme.fontSize.small};
`

// ** Components **
export const ExperienceItem: FC<ExperienceItemType> = ({
  companyName,
  position,
  startDate,
  endDate,
  techStack,
}) => {
  const getMonthYearFormat = (date: Date): string => {
    return moment(date).format('MMMM YYYY')
  }

  const getTimespanFromDates = (startDate: Date, endDate: Date | 'present'): string => {
    return `${getMonthYearFormat(startDate)} - ${
      endDate === 'present' ? endDate : getMonthYearFormat(endDate)
    }`
  }

  return (
    <ExperienceItemWrapper>
      <Period>{getTimespanFromDates(startDate, endDate)}</Period>
      <PositionAndCompany>
        {position} - {companyName}
      </PositionAndCompany>
      <TechStack>{techStack.join(', ')}</TechStack>
      {/* <TextWithTooltip
        text="Technology stack"
        tooltipText={techStack.reduce<string>((tech, sum) => `${sum}, ${tech}`, '')}
      ></TextWithTooltip> */}
    </ExperienceItemWrapper>
  )
}
