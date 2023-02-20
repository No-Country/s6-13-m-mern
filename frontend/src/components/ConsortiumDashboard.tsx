import { type FC } from 'react'
import { Link } from 'react-router-dom'
import { useConsortiumStore } from '../store/consortium'

interface ConsortiumDashboardProps {
  name?: string
}

const actions = [
  {
    id: 1,
    name: 'Communications',
    path: 'communications',
  },
  {
    id: 2,
    name: 'Expenses',
    path: 'expenses',
  },
  {
    id: 3,
    name: 'Entries and exits',
    path: 'entries&exits',
  },
  {
    id: 4,
    name: 'Events',
    path: 'events',
  },
  {
    id: 5,
    name: 'Review complaints',
    path: 'complaints',
  },
  {
    id: 6,
    name: 'members',
    path: 'members',
  },
]
// src={'./assets/adm/}

export const ConsortiumDashboard: FC<ConsortiumDashboardProps> = ({ name = 'Alberto' }: ConsortiumDashboardProps) => {
  return (
    <div className=" w-full m-auto flex flex-col justify-start items-center gap-4 py-10 relative ">
      <div className="absolute top-0 w-full h-[45%] -z-10 border-b-2 bg-blue border-black" />
      <div
        className="text-white w-full p-10 max-w-screen-xl m-auto text-2xl font-bold font-inter
                    md:text-left md:text-3xl"
      >
        Welcome {name}!
      </div>
      <div
        className="grid grid-cols-1 grid-flow-rows gap-4
                     sm:grid-cols-2
                     lg:grid-cols-3 md:gap-9"
      >
        {actions.map((action) => (
          <Link
            to={`/admin/${action.path}`}
            key={action.id}
            className="relative w-[300px]"
          >
            <img
              className="w-full -z-10"
              src={`./assets/adm/${action.path}.svg`}
              alt={action.name}
            />
            <p className="absolute bottom-0 left-0 right-0 rounded z-10 py-1 text-center font-inter font-bold text-xl border-2 border-black bg-white bg-opacity-25 backdrop-blur-sm">
              {action.name}
            </p>
          </Link>
        ))}
      </div>
    </div>
  )
}
