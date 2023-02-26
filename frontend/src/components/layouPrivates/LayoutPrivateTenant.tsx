import { Navigate, Outlet } from 'react-router-dom'
import { useAuthStore } from '../../store/auth'

const LayoutPrivateTenant = () => {
  const token = useAuthStore((state) => state.token)
  const role = useAuthStore((state) => state.role)

  return <div>{token && role === 'tenant' ? <Outlet /> : <Navigate to="/user" />}</div>
}

export default LayoutPrivateTenant
