import { useContext, createContext, useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { getCookie, removeCookie, setCookie } from '../utils'

export type User = {
  name: string
  email: string
  accessToken: string
}

export type Credentials = {
  email: string
  password: string
}

export type AuthContextType = {
  user?: User
  onLogin: (credentials: Credentials, redirectTo?: string) => Promise<void>
  onLogout: () => void
}

const AuthContext = createContext<AuthContextType>({} as AuthContextType)

export const AuthProvider = ({ children }: { children: any }) => {
  const userCookie = getCookie('user')
  const userFromCookie: User = userCookie && JSON.parse(userCookie)

  const [user, setUser] = useState<User | undefined>(userFromCookie || undefined)

  useEffect(() => {
    setUser(userFromCookie)
  }, [userCookie])

  const navigate = useNavigate()

  const onLogin = async (credentials: Credentials, redirectTo: string = '/'): Promise<void> => {
    try {
      const response = await fetch('http://localhost:4000/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(credentials),
      })

      if (!response.ok) {
        throw new Error('Issue with submitting credentials')
      }

      const res = await response.json()

      if (res) {
        setCookie('user', JSON.stringify(res), 30)
        setUser(user)
        navigate(redirectTo)
        return
      }

      throw new Error(res.message)
    } catch (err) {
      console.error(err)
    }
  }

  const onLogout = () => {
    setUser(undefined)
    removeCookie('user')
    navigate('/login')
  }

  return <AuthContext.Provider value={{ user, onLogin, onLogout }}>{children}</AuthContext.Provider>
}

export const useAuth = () => {
  return useContext(AuthContext)
}
