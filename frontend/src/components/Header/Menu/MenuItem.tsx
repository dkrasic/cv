import { FC } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { DEVICE } from '../../../styles/breakpoints'

// ** Props **
interface MenuItemProps {
  children: any
  href: string
}

// ** Styles **
const ItemWrapper = styled.li`
  display: flex;
  align-items: center;
  --spacing: 0.5rem;

  @media ${DEVICE.tabletAndUp} {
    &:not(:last-of-type) {
      margin-right: var(--spacing);

      &:after {
        content: '';
        background-color: ${props => props.theme.colors.lightGrey};
        border-radius: 0.25rem;
        opacity: 0.4;
        margin-left: var(--spacing);
        width: 0.25rem;
        height: 0.25rem;
      }
    }
  }

  @media ${DEVICE.mobile} {
    padding: 1rem 0.5rem;

    &:not(:last-of-type) {
      border-bottom: ${props => `1px solid ${props.theme.colors.lightGrey}`};
    }
  }
`

const ItemLink = styled(Link)`
  text-decoration: none;
  white-space: nowrap;
  color: ${props => props.theme.colors.orangeYellow};
  font-size: ${props => props.theme.fontSize.medium};

  &:hover {
    text-decoration: revert;
  }
`

// ** Components **
export const MenuItem: FC<MenuItemProps> = ({ href, children }) => {
  return (
    <ItemWrapper>
      <ItemLink to={href}>{children}</ItemLink>
    </ItemWrapper>
  )
}
