import { Link } from 'react-router-dom'
import { TitleComponents } from '../../../components/TitleComponents'
import { userStore } from '../../../store/user'

interface Props {
  setMenu: React.Dispatch<React.SetStateAction<string>>
}

const MyConsortium = ({ setMenu }: Props) => {
  const user = userStore((state) => state.userData)
  const handleClick = () => {
    setMenu('Create consortium')
  }

  return (
    <section>
      <TitleComponents title="My consortiums" />
      <div className="flex flex-wrap justify-center sm:justify-start gap-4 sm:gap-2 lg:gap-4 xl:gap-10 mt-8 mx-8 sm:mx-4 md:ml-8 xl:ml-16 2xl:ml-32">
        {user?.consortium?.map((consortium) => (
          <Link
            // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
            to={`/admin/consortium/${consortium._id}`}
            key={consortium._id}
            className="w-56 sm:w-48 sm:h-42 md:w-60 lg:w-56 xl:w-64 relative drop-shadow-2xl"
          >
            <Link
              to={`/admin/editinfo/${consortium._id}`}
              className="absolute top-2 right-2"
            >
              <img
                src="../assets/edit.png"
                alt=""
              />
            </Link>
            <img
              src="https://res.cloudinary.com/dozwd1ssj/image/upload/v1676344376/Card_Home_Admin_omrprw.png"
              alt="card"
            />
            <span className="sm:text-sm md:text-lg text-center font-bold absolute bottom-1 w-full border-t-2 border-black bg-slate-300 bg-opacity-30">
              {consortium.address}
            </span>
          </Link>
        ))}
        <button
          onClick={handleClick}
          className="flex flex-col items-center bg-blue w-56 h-32 sm:w-48 sm:h-28 md:w-60 md:h-36 lg:w-56 lg:h-30 xl:w-64 rounded-lg border-2 border-black drop-shadow-2xl"
        >
          <img
            src="../assets/Vector.png"
            alt="icon"
            className="mt-4 md:mt-6 mb-2 md:mb-4 rounded-full border-2 md:border-4 border-white p-2 sm:w-10 md:w-12 lg:w-14"
          />
          <p className="text-white text-center sm:text-sm md:text-base lg:text-lg pb-2">Add consortium</p>
        </button>
      </div>
    </section>
  )
}

export default MyConsortium
