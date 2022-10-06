import styled from 'styled-components'
import { useDevice } from '../../hooks/useDevice'
import { Menu as MenuIcon } from '@styled-icons/evaicons-solid/Menu'
import { useState } from 'react'

// ** Styles **
const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 8px;
`

const MenuItem = styled.span`
  color: ${props => props.theme.colors.lightGrey};
  font-size: ${props => props.theme.fontSize.small};
  font-style: italic;
  cursor: pointer;
`

const StyledMenuIcon = styled(MenuIcon)`
  color: red;
`

// ** Components **
export const Menu = () => {
  const [isExpanded, setIsExpanded] = useState(false)
  const { mobile } = useDevice()

  return (
    <Wrapper>
      {mobile && (
        <StyledMenuIcon size="32" title="Main menu" onClick={() => setIsExpanded(!isExpanded)} />
      )}
      {(!mobile || isExpanded) && (
        <>
          <MenuItem>About me</MenuItem>
          <MenuItem>Projects</MenuItem>
          <MenuItem>Contact</MenuItem>
        </>
      )}
    </Wrapper>
  )
}
