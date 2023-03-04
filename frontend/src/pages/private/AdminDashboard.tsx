import { useEffect, useState } from 'react'
import CreateConsortium from './admin/CreateConsortium'
import MyConsortium from './admin/MyConsortium'
import { userStore } from '../../store/user'
import UserProfileData from './user/UserProfileData'
import Logout from '../../components/Logout'
import Profile from './admin/MobileProfile'
import HeroUser from '../../components/HeroUser'
import { useLocation } from 'react-router-dom'
import MenuMobile from './MenuMobile'

const defaultImg = '/assets/defaultUser.svg'

const adminDashboard = () => {
  const [menu, setMenu] = useState('profile')
  const [logout, setLogout] = useState(false)

  const user = userStore((state) => state.userData)

  const location = useLocation()

  useEffect(() => {
    if (location.state?.show) {
      setMenu(location.state?.show)
    }
  }, [location])

  return (
    <HeroUser>
      <div className="hidden sm:inline w-full h-fit px-10">
        <div className="flex min-h-[560px] pt-12 justify-center">
          <div className="hidden sm:inline bg-[#BFD5FF] bg-opacity-70 min-w-[100px] lg:min-w-[268px] border-2 border-black rounded-lg p-5 relative">
            <div className="lg:flex mt-5 mb-3 lg:mb-10 text-center">
              <div className="rounded-full h-[65px] lg:h-[90px] w-[65px] lg:w-[90px] overflow-hidden border-2 border-black relative mx-auto">
                <img
                  className="object-cover h-full lg:h-[90px] min-w-full"
                  src={user?.img || defaultImg}
                  alt="photo"
                />
              </div>
              <div className="hidden lg:inline text-base text-center mx-auto">
                <p className="font-bold">
                  {user?.name} {user?.lastname}
                </p>
                {user?.role === 'admin' && <p>Administrator</p>}
              </div>
            </div>
            <div className="mt-16 lg:mt-0">
              <div className={`block ${menu === 'profile' ? 'font-bold lg:bg-[#EFF6FF] rounded-md' : ''}`}>
                <button
                  className="flex items-center py-3"
                  onClick={() => {
                    setMenu('profile')
                  }}
                >
                  <img
                    src="/assets/icons/Person.svg"
                    alt=""
                    className="h-5 mx-4 lg:mx-2"
                  />
                  <span className="hidden lg:inline">My Profile</span>
                </button>
              </div>
              <div className={`block ${menu === 'My consortiums' ? 'font-bold lg:bg-[#EFF6FF] rounded-md' : ''}`}>
                <button
                  className="flex items-center py-3"
                  onClick={() => {
                    setMenu('My consortiums')
                  }}
                >
                  <img
                    src="/assets/icons/Complaints.svg"
                    alt=""
                    className="h-5 mx-4 lg:mx-2"
                  />
                  <span className="hidden lg:inline">My consortiums</span>
                </button>
              </div>
            </div>
            <button
              className="flex items-center py-3 absolute bottom-6 font-bold"
              onClick={() => {
                setLogout(true)
              }}
            >
              <img
                src="/assets/icons/Logout2.svg"
                alt=""
                className="h-5 mx-4 lg:mx-2"
              />
              <span className="hidden lg:inline">Logout</span>
            </button>
          </div>
          <div className="bg-[#B4CAE7] bg-opacity-50 w-[880px] border border-black rounded-lg  pb-6">
            {menu === 'profile' && <UserProfileData />}
            {menu === 'My consortiums' && <MyConsortium setMenu={setMenu} />}
            {menu === 'Create consortium' && <CreateConsortium setMenu={setMenu} />}
            {/* {menu === 'Edit consortium' && <EditConsortium />} */}
          </div>
        </div>
      </div>
      <Logout
        logout={logout}
        setLogout={setLogout}
      />
      <div className="sm:hidden w-full h-full overflow-y-scroll no-scrollbar">
        {menu === 'profile' && <Profile />}
        {menu === 'My consortiums' && <MyConsortium setMenu={setMenu} />}
        {menu === 'Create consortium' && <CreateConsortium setMenu={setMenu} />}
        {menu === 'menu' && <MenuMobile setMenu={setMenu} />}
      </div>
    </HeroUser>
  )
}

export default adminDashboard
