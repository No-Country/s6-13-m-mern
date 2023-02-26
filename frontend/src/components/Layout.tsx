import Header from './Header'
import { Outlet } from 'react-router-dom'
import Footer from './Footer'
import MobileBar from './MobileBar'

const Layout = () => {
  return (
    <div className="min-h-screen">
      <div className="h-[60px] sm:h-20">
        <Header />
      </div>
      <div className='min-h-fit'>
        <Outlet />
      </div>
      <div className=" hidden sm:inline h-[1000px]">
        <Footer />
      </div>
      <div className=' sm:hidden fixed bottom-2 right-1/2 translate-x-1/2 z-50'>
        <MobileBar />
      </div>
    </div>
  )
}

export default Layout
