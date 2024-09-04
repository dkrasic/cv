import { Navigate, Outlet, useLocation } from 'react-router-dom'
import { getCookie } from '../../utils'

const PrivateRoute = () => {
  const userCookie = getCookie('user')
  const user = userCookie && JSON.parse(userCookie)

  const { pathname } = useLocation()

  if (!user?.accessToken) return <Navigate to={`/login?redirectTo=${pathname}`} />
  return <Outlet />
}

export default PrivateRoute
