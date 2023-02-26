import { userStore } from '../../store/user'
import EditProfile from './EditProfile'

interface Props {
  setEdit: React.Dispatch<React.SetStateAction<boolean>>
}

const UserEditProfile = ({ setEdit }: Props) => {
  const data = userStore((state) => state.userData)
  return data ? <EditProfile preloadValues={data} setEdit={setEdit} /> : <div>Loading...</div>
}

export default UserEditProfile
