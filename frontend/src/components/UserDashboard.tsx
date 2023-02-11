import { NavLink, Outlet, useLocation } from 'react-router-dom'
import Container from './Container'
import { useEffect, useState } from 'react'
import HeroUser from './HeroUser'

const UserDashboard = () => {
  const [imageUrl, setImageUrl] = useState('')
  const { pathname } = useLocation()

  useEffect(() => {
    switch (pathname) {
      case '/userInformation':
        setImageUrl('/assets/background/Information.jpg')
        break
      case '/userDocuments':
        setImageUrl('/assets/background/Documents.jpg')
        break
      case '/userPayments':
        setImageUrl('/assets/background/Payments.jpg')
        break
      default:
        setImageUrl('')
        break
    }
  }, [pathname])

  return (
    <HeroUser imageUrl={imageUrl}>
      <Container>
        <div className="flex h-[560px] pt-12">
          <div className="bg-blueUser bg-opacity-70 min-w-[268px] border-2 border-black rounded-lg pl-7 pr-2">
            <div className="flex mt-10 mb-6 ">
              <div className="rounded-full h-[90px] w-[90px] overflow-hidden border-2 border-black relative">
                <img
                  className="object-cover h-[90px] min-w-full"
                  src="/assets/defaultUser.svg"
                  alt=""
                />
              </div>
              <div className="text-base text-center mx-auto">
                <p className=" font-bold">Monica Rivera</p>
                <p>Ownew</p>
              </div>
            </div>
            <NavLink
              to="/userInformation"
              className={({ isActive }: { isActive: boolean }) => `${isActive ? 'font-bold' : ''}`}
            >
              <p className="py-[15px]">Information</p>
            </NavLink>
            <NavLink
              to="/userDocuments"
              className={({ isActive }: { isActive: boolean }) => `${isActive ? 'font-bold' : ''}`}
            >
              <p className="py-[15px]">Documents</p>
            </NavLink>
            <NavLink
              to="/userAmenities"
              className={({ isActive }: { isActive: boolean }) => `${isActive ? 'font-bold' : ''}`}
            >
              <p className="py-[15px]">Amenities</p>
            </NavLink>
            <NavLink
              to="/userPayments"
              className={({ isActive }: { isActive: boolean }) => `${isActive ? 'font-bold' : ''}`}
            >
              <p className="py-[15px]">Payments</p>
            </NavLink>
            <NavLink
              to="/userOrders"
              className={({ isActive }: { isActive: boolean }) => `${isActive ? 'font-bold' : ''}`}
            >
              <p className="py-[15px]">Orders</p>
            </NavLink>
            <NavLink
              to="/userVoting"
              className={({ isActive }: { isActive: boolean }) => `${isActive ? 'font-bold' : ''}`}
            >
              <p className="py-[15px]">Voting</p>
            </NavLink>
          </div>
          <div className="bg-blue bg-opacity-20 w-[880px] border border-black rounded-lg">
            <Outlet />
          </div>
        </div>
      </Container>
    </HeroUser>
  )
}

export default UserDashboard
