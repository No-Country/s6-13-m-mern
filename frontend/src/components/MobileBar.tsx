import { Link } from 'react-router-dom'

const MobileBar = () => {
  return (
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
  )
}

export default MobileBar
