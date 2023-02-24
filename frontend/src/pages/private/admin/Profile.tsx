import { Link } from 'react-router-dom'
import Container from '../../../components/Container'
import { TitleComponents } from '../../../components/TitleComponents'
import { userStore } from '../../../store/user'

const Profile = () => {
  const user = userStore((state) => state.userData)

  console.log(user)
  return (
    <section>
      <div className="flex gap-4">
        <TitleComponents
          title="My Profile"/>
        <Link
          to=""
          // cambiar a ruta de editar users
          className="mt-10"
        >
          <img
            src="../assets/edit.png"
            alt=""
          />
        </Link>
      </div>
      <Container>
        <div className="flex flex-col items-center">
          <img
            className="w-32 h-32 rounded-lg border-2 border-black"
            src={user?.img}
            alt="photo"
          />
          <h2 className="mt-12 mb-8 font-bold text-xl text-blueDark">
            {user?.name} {user?.lastname}
          </h2>
          <div className="flex flex-col gap-2">
            <span>{user?.phone}</span>
            <span>Piso-Dto: {user?.apt}</span>
          </div>
        </div>
      </Container>
    </section>
  )
}
export default Profile
