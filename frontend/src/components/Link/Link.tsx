import styled from 'styled-components'
import { Link as RouterLink } from 'react-router-dom'
import { FC } from 'react'

// ** Props **
export interface LinkProps {
  text: string
  href: string
}

// ** Styles **
const StyledLink = styled(RouterLink)`
  text-decoration: none;
  white-space: nowrap;
  color: ${props => props.theme.colors.orangeYellow};
  font-size: ${props => props.theme.fontSize.medium};

  &:hover {
    text-decoration: revert;
  }
`

// ** Components **
export const Link: FC<LinkProps> = ({ href, text }) => {
  return <StyledLink to={href}>{text}</StyledLink>
}
