import { FC } from 'react'
import { Link, LinkProps } from '../../Link'
import styled from 'styled-components'
import { DEVICE } from '../../../styles/breakpoints'

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

// ** Components **
export const MenuItem: FC<LinkProps> = ({ href, text }) => {
  return (
    <ItemWrapper>
      <Link href={href} text={text}></Link>
    </ItemWrapper>
  )
}
