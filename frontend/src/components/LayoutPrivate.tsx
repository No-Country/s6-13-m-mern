import { Navigate, Outlet } from 'react-router-dom'

const LayoutPrivate = () => {
  // TODO: Traer del estado el user logueado o el token!

  const userLogged = false

  return <div>{userLogged ? <Outlet /> : <Navigate to="/login" />}</div>
}

export default LayoutPrivate
