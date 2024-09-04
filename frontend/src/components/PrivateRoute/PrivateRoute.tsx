import { Navigate, Outlet } from 'react-router-dom'
import { useAuth } from '../../context/authContext'

const PrivateRoute = () => {
  const { user } = useAuth()
  if (!user?.accessToken) return <Navigate to="/login" />
  return <Outlet />
}

export default PrivateRoute
