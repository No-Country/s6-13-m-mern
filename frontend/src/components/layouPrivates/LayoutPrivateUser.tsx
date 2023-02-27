import { Navigate, Outlet } from 'react-router-dom'
import { useAuthStore } from '../../store/auth'
import { userStore } from '../../store/user'
import getConsortiumService from '../../services/getConsortiumService'
import { useConsortiumStore } from '../../store/consortium'
import { useEffect } from 'react'

const LayoutPrivateUser = () => {
  const token = useAuthStore((state) => state.token)
  const role = useAuthStore((state) => state.role)

  const user = userStore((state) => state.userData)
  const consortiumId = user?.consortium?.find(() => true)?._id

  const getConsortium = async (id: string) => {
    const consort = await getConsortiumService(id)
    console.log(consort)

    useConsortiumStore((state) => {
      state.setData(consort)
    })
  }

  useEffect(() => {
    // eslint-disable-next-line @typescript-eslint/no-floating-promises
    if (consortiumId) getConsortium(consortiumId)
  }, [consortiumId])

  return <div>{token && (role === 'user' || role === 'tenant') ? <Outlet /> : <Navigate to="/login" />}</div>
}

export default LayoutPrivateUser
