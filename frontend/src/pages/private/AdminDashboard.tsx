import { useState } from 'react'
import Container from '../../components/Container'
import CreateConsortium from './admin/CreateConsortium'
import MyConsortium from './admin/MyConsortium'
import Profile from './admin/Profile'
import EditConsortium from './admin/EditConsortium'
import { userStore } from '../../store/user'
import { useAuthStore } from '../../store/auth'

const adminDashboard = () => {
  const user = userStore((state) => state.userData)

  const handleLogout = useAuthStore((state) => state.setLogout)

  const [menu, setMenu] = useState('My consortiums')

  return (
    <section className="pb-32">
      <Container>
        <div className="flex gap-7">
          <div className="relative w-[288px] h-[560px] left-[30px] top-[50px] bg-[#0064EBB8] rounded-[8px] border-[2.5px] border-[#00060D]">
            <div className="flex flex-col xl:flex-row justify-center gap-4 pt-12 px-2">
              <img
                src={user?.img}
                alt="photo"
                className="rounded-full border-black border-2 w-16 h-16 xl:w-20 xl:h-20 mx-10 xl:mx-0"
              />
              <div className="flex flex-col justify-center text-center">
                <h4 className="font-bold text-xl">
                  {user?.name} {user?.lastname}
                </h4>
                <span>{user?.role === 'admin' && 'Administrator'}</span>
              </div>
            </div>
            <div className="flex flex-col items-start pl-8 pt-12 gap-12">
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
                onClick={handleLogout}
              >
                Log out
              </button>
            </div>
          </div>
          <div className="bg-blue bg-opacity-40 w-[880px] border-[2.5px] border-black rounded-lg mt-[50px] h-[560px] overflow-y-scroll no-scrollbar">
            {menu === 'Profile' && <Profile />}
            {menu === 'My consortiums' && <MyConsortium setMenu={setMenu} />}
            {menu === 'Create consortium' && <CreateConsortium />}
            {menu === 'Edit consortium' && <EditConsortium />}
          </div>
        </div>
      </Container>
    </section>
  )
}

export default adminDashboard
