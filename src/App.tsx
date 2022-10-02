import styled, { ThemeProvider } from 'styled-components'
import GlobalStyles from './styles/GlobalStyles'
import { MainTheme } from './styles/theme'

const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  background-color: ${props => props.theme.colors.darkGrey};
`
const Title = styled.h1`
  color: ${props => props.theme.colors.lightGrey};
`

const App = () => (
  <ThemeProvider theme={MainTheme}>
    <Wrapper>
      <Title>Title</Title>
    </Wrapper>
    <GlobalStyles />
  </ThemeProvider>
)

export default App
