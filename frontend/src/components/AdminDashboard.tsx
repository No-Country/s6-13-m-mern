import { useState } from 'react'
import Container from './Container'
import CreateConsortium from '../pages/private/admin/CreateConsortium'
import MyConsortium from '../pages/private/admin/MyConsortium'
import Settings from '../pages/private/admin/Settings'

const Dashboard = () => {
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
                <h4 className="font-bold text-lg">Alberto Gómez</h4>
                <span>Administrador</span>
              </div>
            </div>
            <div className="flex flex-col items-start pl-8 pt-12 gap-12">
              <button
                onClick={() => {
                  setMenu('My consortiums')
                }}
              >
                My consortiums
              </button>
              <button
                onClick={() => {
                  setMenu('Create consortium')
                }}
              >
                Create consortium
              </button>
              <button
                onClick={() => {
                  setMenu('Settings')
                }}
              >
                Settings
              </button>
            </div>
          </div>
          <div className="bg-blue bg-opacity-20 w-[880px] border-[2.5px] border-black rounded-lg mt-[50px] h-[560px]">
            {menu === 'My consortiums' && <MyConsortium />}
            {menu === 'Create consortium' && <CreateConsortium />}
            {menu === 'Settings' && <Settings />}
          </div>
        </div>
      </Container>
    </section>
  )
}

export default Dashboard
