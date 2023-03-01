import Header from './Header'
import { Outlet } from 'react-router-dom'
import Footer from './Footer'
import MobileBar from './MobileBar'
import useScreenSize from '../hooks/useScreenSize'

const Layout = () => {
  const { width } = useScreenSize()
  return (
      <div className="min-h-screen flex flex-col ">
        {/* <div className="min-h-fit sm:h-20"> */}
          <Header />
        {/* </div> */}
          <Outlet />
        { width > 640 ? (
          <>
            <div className=" sm:block ">
              <Footer />
            </div>
          </>
        ) : (
          <>
            <div className=' fixed bottom-0 right-1/2 translate-x-1/2 z-50'>
              <MobileBar />
            </div>
          </>
        )}
      </div>
  )
}

export default Layout
