import { Link } from 'react-router-dom'
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
      <div className="flex font-bold text-xl text-blueDark ml-11 mt-32 lg:mt-7">
        <h3>My consortiums</h3>
      </div>
      <div className="flex flex-wrap justify-center sm:justify-start gap-4 sm:gap-2 lg:gap-4 xl:gap-10 mt-8 mx-8 sm:mx-4 md:ml-8 xl:ml-16 2xl:ml-32">
        {user?.consortium?.map((consortium) => (
          <Link
            // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
            to={`/admin/consortium/${consortium._id}`}
            key={consortium._id}
            className="w-64 relative drop-shadow-2xl"
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
              src={consortium.img}
              alt="card"
            />
            <span className="text-lg text-center font-bold absolute bottom-1 w-full border-t-2 border-black bg-slate-300 bg-opacity-30">
              {consortium.address}
            </span>
          </Link>
        ))}
        <button
          onClick={handleClick}
          className="flex flex-col items-center bg-blueDark w-64 rounded-lg border-2 border-black drop-shadow-2xl"
        >
          <img
            src="../assets/Vector.png"
            alt="icon"
            className="mt-6 mb-4 rounded-full border-4 border-white p-2 w-14"
          />
          <p className="text-white text-center text-lg pb-2">Add consortium</p>
        </button>
      </div>
    </section>
  )
}

export default MyConsortium
