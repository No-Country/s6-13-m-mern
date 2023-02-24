import { useState } from 'react'
import Container from '../../components/Container'
import CreateConsortium from './admin/CreateConsortium'
import MyConsortium from './admin/MyConsortium'
import EditConsortium from './admin/EditConsortium'
import { userStore } from '../../store/user'
import UserProfile from './user/UserProfileData'
import Logout from '../../components/Logout'

const adminDashboard = () => {
  const user = userStore((state) => state.userData)
  const [logout, setLogout] = useState(false)

  const [menu, setMenu] = useState('My consortiums')

  return (
    <section className="pb-32">
      <Container>
        <div className="hidden sm:flex sm:gap-7">
          <div className="relative hidden sm:block md:w-[380px] lg:w-[288px] h-[560px] left-[30px] top-[50px] bg-[#0064EBB8] rounded-[8px] border-[2.5px] border-[#00060D]">
            <div className="flex flex-col xl:flex-row justify-center items-center gap-4 pt-12 px-2">
              <img
                src={user?.img}
                alt="photo"
                className="rounded-full border-black border-2 w-16 h-16 xl:w-20 xl:h-20"
              />
              <div className="flex flex-col justify-center text-center">
                <h4 className="font-bold sm:text-md lg:text-xl">
                  {user?.name} {user?.lastname}
                </h4>
                <span className="sm:text-sm lg:text-base">{user?.role === 'admin' && 'Administrator'}</span>
              </div>
            </div>
            <div className="flex flex-col items-start sm:pl-1 md:pl-2 lg:pl-4 xl:pl-8 sm:pt-16 lg:pt-12 gap-12 sm:text-xs md:text-[13px] lg:text-base">
              <button
                className={`${menu === 'Profile' ? 'font-bold' : ''}`}
                onClick={() => {
                  setMenu('Profile')
                }}
              >
                My profile
              </button>
              <button
                className={`${menu === 'My consortiums' ? 'font-bold' : ''}`}
                onClick={() => {
                  setMenu('My consortiums')
                }}
              >
                My consortiums
              </button>
              <button
                className="pt-32 text-blueDark font-bold text-lg"
                onClick={() => {
                  setLogout(true)
                }}
              >
                Log out
              </button>
            </div>
          </div>
          <div className="bg-blue bg-opacity-40 w-[880px] border-[2.5px] border-black rounded-lg mt-[50px] h-[560px] overflow-y-scroll no-scrollbar">
            {menu === 'Profile' && <UserProfile />}
            {menu === 'My consortiums' && <MyConsortium setMenu={setMenu} />}
            {menu === 'Create consortium' && <CreateConsortium />}
            {menu === 'Edit consortium' && <EditConsortium />}
          </div>
        </div>
        <Logout
          logout={logout}
          setLogout={setLogout}
        />
      </Container>
          <div className="sm:hidden w-full h-full overflow-y-scroll no-scrollbar">
            {menu === 'Profile' && <UserProfile />}
            {menu === 'My consortiums' && <MyConsortium setMenu={setMenu} />}
            {menu === 'Create consortium' && <CreateConsortium />}
            {menu === 'Edit consortium' && <EditConsortium />}
          </div>
    </section>
  )
}

export default adminDashboard
