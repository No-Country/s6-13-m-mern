import { useState } from 'react'
const UserNavbar = () => {
  const [isUserOpen, setisUserOpen] = useState(false)

  const handleOpenUser = () => {
    setisUserOpen(!isUserOpen)
  }

  return (
        <div>
            <div className="flex justify-center">
                <div>
                    <div className="dropdown relative">
                        <button
                            className="dropdown-toggle px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg active:text-white transition duration-150 ease-in-out flex items-center whitespace-nowrap"
                            type="button"
                            id="dropdownMenuButton1d"
                            data-bs-toggle="dropdown"
                            aria-expanded="false"
                            onClick={handleOpenUser}>
                            <img
                                className='rounded-full border-4 border-white'
                                src='https://randomuser.me/api/portraits/thumb/men/75.jpg' alt='Photo of user' />
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
                                    d="M31.3 192h257.3c17.8 0 26.7 21.5 14.1 34.1L174.1 354.8c-7.8 7.8-20.5 7.8-28.3 0L17.2 226.1C4.6 213.5 13.5 192 31.3 192z">
                                </path>
                            </svg>
                        </button>

                        <ul
                            className={
                                (isUserOpen ? '' : 'hidden ') +
                                'dropdown-menu w-[256px] mt-9 h-[433px] absolute right-[10%] bg-white text-base z-50 float-left list-none text-left rounded-lg shadow-lg m-0 bg-clip-padding border-none'

                            }
                            aria-labelledby="dropdownMenuButton1d">
                                <div className='absolute top-[-35px] right-[-350px]'>
                                 {/* <svg height="400" width="400"><polygon points="250,60 120,350 350,350" fill="brown" /></svg> */}
                                 <svg height="400" width="400"><polygon points="25,6 12,35 35,35" fill="#002A61" /></svg>
                                </div>
                            <li className=''>
                                <div className=' px-5 flex items-center gap-3 h-[95.52px] bg-blueDark'>
                                    <img className='rounded-full border-4 border-white' src='https://randomuser.me/api/portraits/thumb/men/75.jpg' alt='Photo of user' />
                                    <p className='text-white' >Alberto Gómez</p>
                                </div>
                            </li>
                            <li className=''>
                                <a className="dropdown-item text-sm rounded-lg py-4 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-black hover:bg-[#DEDEDE]"
                                    href="#">Notifications</a>
                            </li>
                            <li className=''>
                                <a className="dropdown-item text-sm rounded-lg py-4 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-black hover:bg-[#DEDEDE]"
                                    href="#">Change Profile</a>
                            </li>
                            <li className=''>
                                <a className="dropdown-item text-sm rounded-lg py-4 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-black hover:bg-[#DEDEDE]"
                                    href="#">Messages</a>
                            </li>
                            <li className=''>
                                <a className="dropdown-item text-sm rounded-lg py-4 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-black hover:bg-[#DEDEDE]"
                                    href="#">Help</a>
                            </li>
                            <li className=''>
                                <a className="dropdown-item text-sm rounded-lg py-4 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-black hover:bg-[#DEDEDE]"
                                    href="#">FAQ</a>
                            </li>
                            <hr className="h-0 my-2 border border-solid border-t-0 border-gray-700 opacity-25" />
                            <li className=''>
                                <a className=" dropdown-item text-sm rounded-lg py-4 px-4 block w-full whitespace-nowrap bg-transparent text-blueDark font-[700] hover:bg-[#DEDEDE]"
                                    href="#">Logout</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
  )
}

export default UserNavbar
