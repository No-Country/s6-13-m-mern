import { Navigate, Outlet } from 'react-router-dom'
import { useAuthStore } from '../../store/auth'

const LayoutPrivateAdmin = () => {
  const token = useAuthStore((state) => state.token)
  const role = useAuthStore((state) => state.role)

  return <div>{token && role === 'admin' ? <Outlet /> : <Navigate to="/login" />}</div>
}

export default LayoutPrivateAdmin
