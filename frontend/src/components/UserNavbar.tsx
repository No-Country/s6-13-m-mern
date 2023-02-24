import { useState, useRef, useEffect } from 'react'
import { userStore } from '../store/user'
import { Link } from 'react-router-dom'
import { useAuthStore } from '../store/auth'

const defaultImg = '/assets/defaultUser.svg'

const UserNavbar = () => {
  const [isUserOpen, setisUserOpen] = useState(false)

  const refOne = useRef<HTMLDivElement>(null)

  useEffect(() => {
    document.addEventListener('click', handleClickOutside, true)
  }, [])

  const handleClickOutside = (e: MouseEvent) => {
    const target = e.target as HTMLDivElement
    if (refOne.current && !refOne.current.contains(target)) {
      setisUserOpen(false)
    }
  }

  const handleOpenUser = () => {
    setisUserOpen(!isUserOpen)
  }

  const user = userStore((state) => state.userData)

  const handleLogout = useAuthStore((state) => state.setLogout)

  return (
    <div>
      <div
        ref={refOne}
        className="flex justify-center"
      >
        <div>
          <div className="dropdown relative">
            <button
              className="dropdown-toggle px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg active:text-white transition duration-150 ease-in-out flex items-center whitespace-nowrap"
              type="button"
              id="dropdownMenuButton1d"
              data-bs-toggle="dropdown"
              aria-expanded="false"
              onClick={handleOpenUser}
            >
              <div className="rounded-full h-[50px] w-[50px] overflow-hidden border-2 border-white relative">
                <img
                  className="object-cover h-[50px] min-w-full"
                  src={user?.img || defaultImg}
                  alt=""
                />
              </div>
              <svg
                aria-hidden="true"
                focusable="false"
                data-prefix="fas"
                data-icon="caret-down"
                className="w-2 ml-2"
                role="img"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 320 512"
              >
                <path
                  fill="currentColor"
                  d="M31.3 192h257.3c17.8 0 26.7 21.5 14.1 34.1L174.1 354.8c-7.8 7.8-20.5 7.8-28.3 0L17.2 226.1C4.6 213.5 13.5 192 31.3 192z"
                ></path>
              </svg>
            </button>

            <ul
              className={
                (isUserOpen ? '' : 'hidden ') +
                'dropdown-menu w-[256px] h-auto absolute right-[-10%] bg-white text-base z-50 float-left list-none text-left rounded-lg shadow-xl m-0 bg-clip-padding border-none'
              }
              aria-labelledby="dropdownMenuButton1d"
              onClick={() => {
                setisUserOpen(false)
              }}
            >
              <li className="">
                <div className=" px-5 flex items-center gap-3 h-[95.52px] bg-blueDark">
                  <div className="rounded-full h-[60px] w-[60px] overflow-hidden border-2 border-white relative">
                    <img
                      className="object-cover h-[60px] min-w-full"
                      src={user?.img || defaultImg}
                      alt=""
                    />
                  </div>
                  <p className="text-white text-lg font-bold pb-6">
                    {user?.name} {user?.lastname}
                  </p>
                </div>
              </li>
              {user?.role === 'tenant' && (
                <li className="">
                  <Link
                    className="dropdown-item my-1 text-sm rounded-lg py-4 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-black hover:bg-[#DEDEDE]"
                    to="user/notifications"
                  >
                    Notifications
                  </Link>
                </li>
              )}
              <li className="">
                <Link
                  className="dropdown-item my-1 text-sm rounded-lg py-4 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-black hover:bg-[#DEDEDE]"
                  to={`${user?.role === 'admin' ? '/admin' : '/user'}`}
                >
                  Change Profile
                </Link>
              </li>
              <hr className="h-0 my-2 border border-solid border-t-0 border-gray-700 opacity-25" />
              <li className="">
                <button
                  className=" dropdown-item my-1 text-sm text-start rounded-lg py-4 px-4 block w-full whitespace-nowrap bg-transparent text-blueDark font-[700] hover:bg-[#DEDEDE]"
                  onClick={handleLogout}
                >
                  Logout
                </button>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default UserNavbar
