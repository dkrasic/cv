import { FC } from 'react'
import styled from 'styled-components'

// ** Props **
interface SectionProps {
  title: string
  description?: string
  children: any
}

// ** Styles **
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`

const Title = styled.p`
  font-size: ${props => props.theme.fontSize.large};
  color: ${props => props.theme.colors.orangeYellow};
`

const Description = styled.p`
  font-size: ${props => props.theme.fontSize.small};
  color: ${props => props.theme.colors.lightGrey};
  margin-top: 0.5rem;
`

const Content = styled.p`
  font-size: ${props => props.theme.fontSize.medium};
  color: white;
  margin-top: 1rem;
`

// ** Components **
export const Section: FC<SectionProps> = ({ title, description, children }) => {
  return (
    <Wrapper>
      <Title>{title}</Title>
      {description && <Description>{description}</Description>}
      <Content>{children}</Content>
    </Wrapper>
  )
}
