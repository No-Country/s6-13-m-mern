import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Container from '../../../components/Container'
import { TitleComponents } from '../../../components/TitleComponents'

const initialState = [
  { id: 1, address: 'Av. Belgrano 499', path: '/consortium' },
  { id: 2, address: 'Av. Córdoba 145', path: '/consortium' },
  { id: 3, address: 'Lima 1664', path: '/consortium' },
  //  TODO:en el path iria la ruta dinámica!
  //  Este initialState se cambiara x el estado de los consorcios con zustand
]

interface Consortium {
  id: number
  address: string
  path: string
}
const MyConsortium = () => {
  const [consortiums, setConsortiums] = useState<Consortium[]>([])

  useEffect(() => {
    setConsortiums(initialState)
  }, [])

  return (
    <section>
      <TitleComponents title="My consortiums" />
      <Container>
        <div className="grid grid-cols-2 gap-4 mb-4">
          {consortiums.map((consortium) => (
            <Link
              to={consortium.path}
              key={consortium.id}
              className="pt-8 w-64 relative"
            >
              <img
                src="https://res.cloudinary.com/dozwd1ssj/image/upload/v1676344376/Card_Home_Admin_omrprw.png"
                alt="card"
              />
              <span className="text-lg text-center font-bold absolute bottom-1 w-full border-t-2 border-black bg-slate-300 bg-opacity-30">
                {consortium.address}
              </span>
            </Link>
          ))}
          <button className="flex flex-col items-center bg-blue mt-8 w-64 rounded-lg border-2 border-black">
            <img
              src="../assets/Vector.png"
              alt="icon"
              className="mt-10 mb-6 rounded-full border-4 border-white p-2"
            />
            <p className="text-white text-center">Add consortium</p>
          </button>
        </div>
      </Container>
    </section>
  )
}

export default MyConsortium
