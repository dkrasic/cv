import styled, { ThemeProvider } from 'styled-components'
import { Header } from './components/Header'
import { DEVICE } from './styles/breakpoints'
import GlobalStyles from './styles/GlobalStyles'
import { MainTheme } from './styles/theme'

// ** Styles **
const Wrapper = styled.div`
  position: relative;
  width: 100%;
  background-color: ${props => props.theme.colors.darkGrey};
`

const Content = styled.div`
  min-height: 200vh; // to be changed
  width: 60%;
  margin: auto;

  border: 1px solid red; // to be changed

  @media ${DEVICE.mobile} {
    width: 100%;
  }
`

// ** Components **
const App = () => (
  <ThemeProvider theme={MainTheme}>
    <Wrapper>
      <Header />
      <Content>I am the content</Content>
    </Wrapper>
    <GlobalStyles />
  </ThemeProvider>
)

export default App
