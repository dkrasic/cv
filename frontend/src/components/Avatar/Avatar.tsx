import { FC, useState } from 'react'
import styled from 'styled-components'
import { useAuth } from '../../context/authContext'

// ** Props **
interface AvatarProps {
  name: string
  email: string
}

// ** Styles **
const avatarSize = 50

const AvatarWrapper = styled.div`
  position: relative;
`

const AvatarCircle = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: ${avatarSize}px;
  width: ${avatarSize}px;
  border-radius: 50%;
  border: ${props => `2px solid ${props.theme.colors.orangeYellow}`};
  color: ${props => props.theme.colors.lightGrey};

  :hover {
    cursor: pointer;
    border-width: 3px;
    font-weight: bold;
  }
`

const Credentials = styled.span`
  text-transform: uppercase;
  font-size: ${props => props.theme.fontSize.large};
  color: ${props => props.theme.colors.deepOrange};
`

const Menu = styled.div`
  --width: 100px;
  position: absolute;
  top: ${avatarSize + 10}px;
  right: 0px;
  min-width: var(--width);
  display: flex;
  flex-direction: column;
  padding: 10px;
  border: ${props => `2px solid ${props.theme.colors.orangeYellow}`};
  color: ${props => props.theme.colors.lightGrey};
  border-radius: 12px;
`

const Name = styled.span`
  font-size: ${props => props.theme.fontSize.medium};
  color: ${props => props.theme.colors.orangeYellow};
`

const Email = styled.span`
  font-size: ${props => props.theme.fontSize.small};
  color: ${props => props.theme.colors.orangeYellow};
  margin-bottom: 10px;
`

const LogoutButton = styled.a`
  font-size: ${props => props.theme.fontSize.small};

  :hover {
    cursor: pointer;
    color: ${props => props.theme.colors.deepOrange};
  }
`

// ** Components **
export const Avatar: FC<AvatarProps> = ({ name, email }) => {
  const [menuExpanded, setMenuExpanded] = useState(false)
  const { onLogout } = useAuth()

  const credentialsText = name
    .split(' ')
    .map(word => word.substring(0, 1))
    .join('')

  const toggleMenu = () => {
    setMenuExpanded(!menuExpanded)
  }

  return (
    <AvatarWrapper onClick={toggleMenu}>
      <AvatarCircle>
        <Credentials>{credentialsText}</Credentials>
      </AvatarCircle>

      {menuExpanded && (
        <Menu>
          <Name>{name}</Name>
          <Email>{email}</Email>
          <LogoutButton onClick={onLogout}>Logout</LogoutButton>
        </Menu>
      )}
    </AvatarWrapper>
  )
}
