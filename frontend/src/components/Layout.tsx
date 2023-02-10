import Header from './Header'
import { Outlet } from 'react-router-dom'
import Footer from './Footer'

const Layout = () => {
  return (
    <div className="min-h-screen">
      <div className="h-[96px]">
        <Header />
      </div>
      <div>
        <Outlet />
      </div>
      <Footer />
    </div>
  )
}

export default Layout
