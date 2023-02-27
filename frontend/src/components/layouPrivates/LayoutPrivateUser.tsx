import { Navigate, Outlet } from 'react-router-dom'
import { useAuthStore } from '../../store/auth'

const LayoutPrivateUser = () => {
  const token = useAuthStore((state) => state.token)
  const role = useAuthStore((state) => state.role)

  return <div>{token && (role === 'user' || role === 'tenant') ? <Outlet /> : <Navigate to="/login" />}</div>
}

export default LayoutPrivateUser
