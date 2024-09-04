import styled, { ThemeProvider } from 'styled-components'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Header } from './components/Header'
import { DEVICE } from './styles/breakpoints'
import GlobalStyles from './styles/GlobalStyles'
import { MainTheme } from './styles/theme'
import { AboutMe, Contact, Home, Login, Projects } from './pages'
import { Admin } from './pages/Admin'
import PrivateRoute from './components/PrivateRoute/PrivateRoute'
import { AuthProvider } from './context/authContext'

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
  padding: 2rem 1rem;
  background-color: ${props => props.theme.usedColors.contentBackground};

  @media ${DEVICE.mobile} {
    width: 100%;
  }
`

// ** Components **
const App = () => (
  <ThemeProvider theme={MainTheme}>
    <Router>
      <AuthProvider>
        <Wrapper>
          <Header />
          <Content>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about-me" element={<AboutMe />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/contact" element={<Contact />} />
              <Route element={<PrivateRoute />}>
                <Route path="/admin" element={<Admin />} />
              </Route>
              <Route path="/login" element={<Login />} />
            </Routes>
          </Content>
        </Wrapper>
      </AuthProvider>
    </Router>
    <GlobalStyles />
  </ThemeProvider>
)

export default App
