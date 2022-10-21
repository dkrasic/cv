import { FC } from 'react'
import styled from 'styled-components'

// ** Props **
interface MobileMenuIconProps {
  onClick: () => void
}

// ** styles **
const MenuIconWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 1.5rem;
  height: var(--menu-icon-height);
`
const MenuIconBar = styled.div`
  width: 100%;
  height: 3px;
  border-radius: 1px;
  background-color: ${props => props.theme.colors.orangeYellow};
`

// ** Components **
export const MobileMenuIcon: FC<MobileMenuIconProps> = ({ onClick }) => {
  return (
    <MenuIconWrapper onClick={onClick} id="main-menu-toggle" aria-label="Open the main menu">
      <MenuIconBar />
      <MenuIconBar />
      <MenuIconBar />
    </MenuIconWrapper>
  )
}
