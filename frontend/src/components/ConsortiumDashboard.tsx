import { type FC } from 'react'
import { Link } from 'react-router-dom'

interface ConsortiumDashboardProps {
  name?: string
}

const actions = [
  {
    id: 1,
    name: 'Edit information',
    path: 'edit-information',
  },
  {
    id: 2,
    name: 'Payments',
    path: 'payments',
  },
  {
    id: 3,
    name: 'Entrances and exits',
    path: 'entrances-exits',
  },
  {
    id: 4,
    name: 'Events',
    path: 'events',
  },
  {
    id: 5,
    name: 'Members',
    path: 'members',
  },
]
// src={'./assets/adm/}

export const ConsortiumDashboard: FC<ConsortiumDashboardProps> = ({ name = 'Admin' }: ConsortiumDashboardProps) => {
  return (
    <div className="m-auto max-w-screen-xl flex flex-col justify-start items-center gap-4 py-10 relative ">
      <Link
        to="/admin"
        className="text-left self-start pl-20"
      >
        ⬅ Panel
      </Link>
      <div
        className="text-blueDark w-full p-10 max-w-screen-xl m-auto text-2xl font-bold font-inter text-center
                    md:text-left md:text-3xl
                    lg:pl-28
                    "
      >
        Welcome {name}!
      </div>
      <div
        className="grid grid-cols-1 grid-flow-rows gap-4
                     sm:grid-cols-2
                     lg:flex lg:flex-row lg:flex-wrap lg:justify-center lg:gap-20"
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
            <p className="absolute bottom-0 left-0 right-0 rounded z-10 text-center font-inter font-normal text-lg border-2 border-black bg-blueLight ">
              {action.name}
            </p>
          </Link>
        ))}
      </div>
    </div>
  )
}
