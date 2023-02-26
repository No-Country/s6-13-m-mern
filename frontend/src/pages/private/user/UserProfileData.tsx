import { useState } from 'react'
import { userStore } from '../../../store/user'
import UserEditProfile from '../EditProfileDashboard'
import { useAuthStore } from '../../../store/auth'
import removeMembersService from '../../../services/removeMemberService'

const defaultImg = '/assets/defaultUser.svg'

const UserProfile = () => {
  const [edit, setEdit] = useState(false)
  const user = userStore((state) => state.userData)
  console.log(user)

  const userId = useAuthStore((state) => state.id)
  const consortiumId = user?.consortium?.find(() => true)?._id
  const handleDelete = async () => {
    console.log(userId, consortiumId)

    if (userId && consortiumId) {
      await removeMembersService(consortiumId, userId)
      console.log('ok')
    }
  }

  return (
    <div className="hidden sm:inline">
      {!edit ? (
        <>
          <div className="flex font-bold text-xl text-blueDark ml-11 mt-7">
            <h3>My Profile</h3>
            <img
              src="/assets/icons/Edit.svg"
              alt=""
              className=" h-6 ml-3 cursor-pointer"
              onClick={() => {
                setEdit(true)
              }}
            />
          </div>
          <div className=" text-center">
            <div className=" h-[130px] w-[130px] overflow-hidden border-2 border-black rounded-lg relative mx-auto my-6">
              <img
                className="object-cover h-[130px] min-w-full"
                src={user?.img || defaultImg}
                alt=""
              />
            </div>
            <p className=" font-bold text-xl my-6 text-blueDark">
              {user?.name} {user?.lastname}
            </p>
            <p className=" my-6">{user?.email}</p>
            <p className=" my-6">{user?.phone}</p>
            <p className=" my-6">Piso|Dto: {user?.apt}</p>
          </div>

          <button onClick={handleDelete}>delete</button>
        </>
      ) : (
        <UserEditProfile setEdit={setEdit} />
      )}
    </div>
  )
}

export default UserProfile
