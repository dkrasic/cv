import styled from 'styled-components'
import { Login as LoginComponent } from '../components/forms/Login'
import { Navigate } from 'react-router-dom'
import { useAuth } from '../context/authContext'

const LoginPageWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 100px;
`

export const Login = () => {
  const { user } = useAuth()
  if (user?.accessToken) return <Navigate to="/" />

  return (
    <LoginPageWrapper>
      <LoginComponent />
    </LoginPageWrapper>
  )
}
