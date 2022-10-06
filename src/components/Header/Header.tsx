import styled from 'styled-components'
import { Menu } from './Menu'

// ** Styles **
const Wrapper = styled.div`
  position: sticky;
  top: 0;
  left: 0;
  right: 0;

  padding: 16px;

  display: flex;
  justify-content: space-between;
  align-items: center;
`

const Title = styled.span`
  color: ${props => props.theme.colors.lightGrey};
  font-size: ${props => props.theme.fontSize.large};
  font-weight: bold;
  background-color: transparent;
  mix-blend-mode: difference;
`

// ** Components **
export const Header = () => {
  return (
    <Wrapper>
      <Title>Danilo Krasić</Title>
      <Menu />
    </Wrapper>
  )
}
