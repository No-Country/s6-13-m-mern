import { Link, useLocation } from 'react-router-dom'

const MobileBar = () => {
  const location = useLocation()
  const path = location.pathname
  const showNav = path.substring(0, 5) === '/user' || path.substring(0, 6) === '/admin'

  return (
    <div className={`${!showNav ? 'hidden sm:inline' : ''}`}>

    <div className=" shadow-lg bg-white w-[90vw] h-[60px] rounded-lg flex px-5 justify-between items-center z-50">
      <Link to="">
        <img
          src="/assets/icons/Home.svg"
          alt=""
          className=" h-12"
        />
      </Link>
      <Link to="">
        <img
          src="/assets/icons/Events.svg"
          alt=""
          className=" h-12"
        />
      </Link>
      <Link to="">
        <img
          src="/assets/icons/Profile.svg"
          alt=""
          className=" h-12"
        />
      </Link>
    </div>
    </div>
  )
}

export default MobileBar
