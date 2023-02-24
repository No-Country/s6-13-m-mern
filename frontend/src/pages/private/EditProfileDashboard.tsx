import { userStore } from '../../store/user'
import EditProfile from './EditProfile'

const UserProfile = () => {
  const data = userStore((state) => state.userData)
  return data ? <EditProfile preloadValues={data} /> : <div>Loading...</div>
}

export default UserProfile
