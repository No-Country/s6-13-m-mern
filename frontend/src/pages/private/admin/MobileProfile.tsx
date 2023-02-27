import { useState } from 'react'
import { userStore } from '../../../store/user'
import UserEditProfile from '../EditProfileDashboard'

const Profile = () => {
  const user = userStore((state) => state.userData)
  const [edit, setEdit] = useState(false)

  return (
    <section>
      {!edit ? (
        <div className="flex sm:hidden flex-col items-center sm:mt-8">
          <div className="bg-blueDark w-full flex justify-center pt-16">
            <img
              className="sm:w-28 md:w-32 rounded-full sm:rounded-lg border-2 border-white -mb-8 sm:-mb-0"
              src={user?.img}
              alt="photo"
            />
          </div>
          <div className="flex gap-2 ml-8 mt-8 sm:mt-0 sm:ml-0">
            <h2 className="sm:mt-12 sm:font-bold text-2xl sm:text-xl md:text-2xl sm:text-blueDark">
              {user?.name} {user?.lastname}
            </h2>
            <img
              src="/assets/icons/Edit.svg"
              alt=""
              className=" h-6 ml-3 cursor-pointer"
              onClick={() => {
                setEdit(true)
              }}
            />
          </div>
          <span className="flex sm:hidden mb-16">{user?.role === 'admin' && 'Administrator'}</span>
          <div className="flex flex-col gap-8 text-center text-lg">
            <span className="flex sm:hidden">{user?.email}</span>
            <span>{user?.phone}</span>
            <span>Piso|Dto: {user?.apt}</span>
            <span className="hidden sm:flex">Piso-Dto: {user?.apt}</span>
          </div>
        </div>
      ) : (
        <UserEditProfile setEdit={setEdit} />
      )}
    </section>
  )
}
export default Profile
