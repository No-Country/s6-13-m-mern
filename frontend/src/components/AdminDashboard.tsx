import { useEffect, useState } from 'react'
import Container from './Container'
import CreateConsortium from '../pages/private/admin/CreateConsortium'
import MyConsortium from '../pages/private/admin/MyConsortium'
import Profile from '../pages/private/admin/Profile'
import EditConsortium from '../pages/private/admin/EditConsortium'
import { userStore } from '../store/user'
import { useAuthStore } from '../store/auth'
import getUserByIdService from '../services/getUserByIdService'
import { IResponseUser } from '../interfaces/userInterfaces'

const adminDashboard = () => {
  const userId = useAuthStore((state) => state.id)

  const setUser = userStore((state) => state.setData)

  const getUser = async () => {
    const res = (await getUserByIdService(userId)) as IResponseUser
    console.log(res)
    setUser(res.user)
  }

  useEffect(() => {
    // eslint-disable-next-line @typescript-eslint/no-floating-promises
    getUser()
  }, [])

  const user = userStore((state) => state.userData)
  console.log(user)
  const handleLogout = useAuthStore((state) => state.setLogout)

  const [menu, setMenu] = useState('My consortiums')

  return (
    <section className="pb-32">
      <Container>
        <div className="flex gap-7">
          <div className="relative w-[288px] h-[560px] left-[30px] top-[50px] bg-[#0064EBB8] rounded-[8px] border-[2.5px] border-[#00060D]">
            <div className="flex justify-center gap-4 pt-12 px-2">
              <img
                src={user?.img}
                alt="photo"
                className="rounded-full border-black border-2 w-24"
              />
              <div className="flex flex-col justify-center text-center">
                <h4 className="font-bold text-lg">{user?.name} {user?.lastname}</h4>
                <span>{user?.role}</span>
              </div>
            </div>
            <div className="flex flex-col items-start pl-8 pt-12 gap-12">
              <button
                className={`${menu === 'Profile' ? 'font-bold' : ''}`}
                onClick={() => {
                  setMenu('Profile')
                }}
              >
                Profile
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
                className={`${menu === 'Edit consortium' ? 'font-bold' : ''}`}
                onClick={() => {
                  setMenu('Edit consortium')
                }}
              >
                Edit consortium
              </button>
              <button onClick={handleLogout}>Logout</button>
            </div>
          </div>
          <div className="bg-blue bg-opacity-20 w-[880px] border-[2.5px] border-black rounded-lg mt-[50px] h-[560px] overflow-y-scroll no-scrollbar">
            {menu === 'Profile' && <Profile />}
            {menu === 'My consortiums' && <MyConsortium />}
            {menu === 'Create consortium' && <CreateConsortium />}
            {menu === 'Edit consortium' && <EditConsortium />}
          </div>
        </div>
      </Container>
    </section>
  )
}

export default adminDashboard
