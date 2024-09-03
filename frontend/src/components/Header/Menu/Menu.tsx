import styled from 'styled-components'
import { useDevice } from '../../../hooks/useDevice'
import { useState } from 'react'
import { MenuItem as MenuItemType } from './types'
import { DEVICE } from '../../../styles/breakpoints'
import { MobileMenuIcon } from './MobileMenuIcon'
import { MenuItem } from './MenuItem'

// ** Props **
interface MenuItemListProps {
  isExpandedOnMobile: boolean
}

// ** Styles **
const MenuWrapper = styled.div`
  position: relative;
  --menu-icon-height: 1.25rem;
`

const MenuItemList = styled.ol<MenuItemListProps>`
  display: flex;
  list-style-type: none;
  padding: 0;

  @media ${DEVICE.mobile} {
    flex-direction: column;
    position: absolute;
    top: var(--menu-icon-height);
    right: 0;
    opacity: ${props => (props.isExpandedOnMobile ? '1' : '0')};
    transition: opacity 0.25s;
    padding: 0.5rem;
    background-color: ${props => props.theme.colors.darkGrey};
  }
`

// ** Components **
export const Menu = () => {
  const { mobile } = useDevice()
  const [isExpanded, setIsExpanded] = useState(false)

  const menuItems: MenuItemType[] = [
    { href: '/about-me', text: 'About Me' },
    { href: '/projects', text: 'Projects' },
    { href: '/contact', text: 'Contact' },
    { href: '/admin', text: 'Admin' },
  ]

  return (
    <MenuWrapper>
      <nav>
        <MenuItemList isExpandedOnMobile={isExpanded}>
          {menuItems.map(({ href, text }, index) => (
            <MenuItem key={index} href={href} text={text}></MenuItem>
          ))}
        </MenuItemList>
      </nav>

      {mobile && <MobileMenuIcon onClick={() => setIsExpanded(!isExpanded)} />}
    </MenuWrapper>
  )
}
