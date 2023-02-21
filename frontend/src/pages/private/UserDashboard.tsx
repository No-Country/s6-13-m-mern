import { useEffect, useState } from 'react'
import HeroUser from '../../components/HeroUser'
import UserInformation from './user/UserInformation'
import UserDocuments from './user/UserDocuments'
import UserAmenities from './user/UserAmenities'
import { userStore } from '../../store/user'
import { useAuthStore } from '../../store/auth'
import getUserByIdService from '../../services/getUserByIdService'
import { UserProfile } from '../../interfaces/userInterfaces'
import UserComplaints from './user/UserComplaints'
import UserCreatePayments from './user/UserCreatePayments'
import UserProfileData from './user/UserProfileData'

const defaultImg = '/assets/defaultUser.svg'

const UserDashboard = () => {
  const role = userStore((state) => state.userData?.role)

  const [menu, setMenu] = useState('profile')
  const [imageUrl, setImageUrl] = useState('info')
  const [userRole, setUserRole] = useState(role)
  const [userData, setUserData] = useState<UserProfile>()

  const userId = useAuthStore((state) => state.id)

  const getUser = async () => {
    const user: any = await getUserByIdService(userId)
    setUserRole(user.role)
    setUserData(user)
  }

  useEffect(() => {
    // eslint-disable-next-line @typescript-eslint/no-floating-promises
    getUser()
  }, [])

  const handleLogout = useAuthStore((state) => state.setLogout)

  return (
    <HeroUser imageUrl={imageUrl}>
      <div className=" w-full h-full px-10">
        <div className="flex min-h-[560px] pt-12 justify-center">
          <div className="bg-blueUser bg-opacity-70 min-w-[268px] border-2 border-black rounded-lg pl-7 pr-2">
            <div className="flex mt-10 mb-6 ">
              <div className="rounded-full h-[90px] w-[90px] overflow-hidden border-2 border-black relative">
                <img
                  className="object-cover h-[90px] min-w-full"
                  src={userData?.img || defaultImg}
                  alt=""
                />
              </div>
              <div className="text-base text-center mx-auto">
                <p className=" font-bold">
                  {userData?.name} {userData?.lastname}
                </p>
                <p>Owner</p>
              </div>
            </div>
            <button
              className={`block py-3 ${menu === 'profile' ? 'font-bold' : ''}`}
              onClick={() => {
                setMenu('profile')
                setImageUrl('info')
              }}
            >
              My profile
            </button>
            {userRole === 'tenant' && (
              <>
                <button
                  className={`block py-3 ${menu === 'information' ? 'font-bold' : ''}`}
                  onClick={() => {
                    setMenu('information')
                    setImageUrl('info')
                  }}
                >
                  Information
                </button>
                <button
                  className={`block py-3 ${menu === 'documents' ? 'font-bold' : ''}`}
                  onClick={() => {
                    setMenu('documents')
                    setImageUrl('pay')
                  }}
                >
                  My payments
                </button>
                <button
                  className={`block py-3 ${menu === 'amenities' ? 'font-bold' : ''}`}
                  onClick={() => {
                    setMenu('amenities')
                    setImageUrl('amen')
                  }}
                >
                  Amenities
                </button>
                <button
                  className={`block py-3 ${menu === 'create' ? 'font-bold' : ''}`}
                  onClick={() => {
                    setImageUrl('doc')
                    setMenu('create')
                  }}
                >
                  Create a payment
                </button>
                <button
                  className={`block py-3 ${menu === 'complaint' ? 'font-bold' : ''}`}
                  onClick={() => {
                    setMenu('complaint')
                    setImageUrl('info')
                  }}
                >
                  Complaints
                </button>
              </>
            )}
            <button
              className="block py-3"
              onClick={handleLogout}
            >
              Logout
            </button>
          </div>
          <div className="bg-blue bg-opacity-20 w-[880px] border border-black rounded-lg  pb-6">
            {menu === 'profile' && <UserProfileData />}
            {menu === 'information' && <UserInformation />}
            {menu === 'documents' && <UserDocuments />}
            {menu === 'amenities' && <UserAmenities />}
            {menu === 'create' && <UserCreatePayments />}
            {menu === 'complaint' && <UserComplaints />}
          </div>
        </div>
      </div>
    </HeroUser>
  )
}

export default UserDashboard
