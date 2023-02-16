import { useState } from 'react'
import Container from './Container'
import CreateConsortium from '../pages/private/admin/CreateConsortium'
import MyConsortium from '../pages/private/admin/MyConsortium'
import Profile from '../pages/private/admin/Profile'
import EditConsortium from '../pages/private/admin/EditConsortium'

interface AdminName {
  name?: string
}

const Dashboard = ({ name = 'Alberto Gómez' }: AdminName) => {
  const [menu, setMenu] = useState('My consortiums')
  return (
    <section className="pb-32">
      <Container>
        <div className="flex gap-7">
          <div className="relative w-[288px] h-[560px] left-[30px] top-[50px] bg-[#0064EBB8] rounded-[8px] border-[2.5px] border-[#00060D]">
            <div className="flex justify-center gap-4 pt-12 px-2">
              <img
                src="/assets/defaultUser.svg"
                alt="photo"
                className="rounded-full border-black border-2 w-24"
              />
              <div className="flex flex-col justify-center text-center">
                <h4 className="font-bold text-lg">{name}</h4>
                <span>Administrador</span>
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
                className={`${menu === 'Create consortium' ? 'font-bold' : ''}`}
                onClick={() => {
                  setMenu('Create consortium')
                }}
              >
                Create consortium
              </button>
              <button
                className={`${menu === 'Edit consortium' ? 'font-bold' : ''}`}
                onClick={() => {
                  setMenu('Edit consortium')
                }}
              >
                Edit consortium
              </button>
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

export default Dashboard
