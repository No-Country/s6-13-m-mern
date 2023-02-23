import { userStore } from '../../../store/user'

const defaultImg = '/assets/defaultUser.svg'

const UserProfile = () => {
  const user = userStore((state) => state.userData)
  console.log(user)

  return (
    <div>
      <h3 className="font-bold text-xl ml-11 mt-7">My Profile</h3>
      <div className=" text-center">
        <div className=" h-[130px] w-[130px] overflow-hidden border-2 border-black rounded-lg relative mx-auto my-6">
          <img
            className="object-cover h-[130px] min-w-full"
            src={user?.img || defaultImg}
            alt=""
          />
        </div>
        <p className=" font-bold text-xl my-6">
          {user?.name} {user?.lastname}
        </p>
        <p className=" my-6">{user?.email}</p>
        <p className=" my-6">{user?.phone}</p>
        <p className=" my-6">{user?.consortium?.map((cons) => cons.address)}</p>
      </div>
    </div>
  )
}

export default UserProfile
