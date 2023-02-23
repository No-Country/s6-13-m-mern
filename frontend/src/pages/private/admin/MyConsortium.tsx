import { Link } from 'react-router-dom'
import Container from '../../../components/Container'
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
      <TitleComponents
        title="My consortiums"
        path=""
      />
      <Container>
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-8 xl:-mr-32">
          {user?.consortium?.map((consortium) => (
            <Link
              // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
              to={`/admin/consortium/${consortium._id}`}
              key={consortium._id}
              className="pt-8 w-64 relative"
            >
              <Link
                to=""
                // cambiar a ruta de editar consorcios
                className="absolute top-10 right-2"
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
              <span className="text-lg text-center font-bold absolute bottom-1 w-full border-t-2 border-black bg-slate-300 bg-opacity-30">
                {consortium.address}
              </span>
            </Link>
          ))}
          <button
            onClick={handleClick}
            className="flex flex-col items-center bg-blue mt-8 w-64 rounded-lg border-2 border-black"
          >
            <img
              src="../assets/Vector.png"
              alt="icon"
              className="mt-10 mb-6 rounded-full border-4 border-white p-2"
            />
            <p className="text-white text-center pb-4">Add consortium</p>
          </button>
        </div>
      </Container>
    </section>
  )
}

export default MyConsortium
