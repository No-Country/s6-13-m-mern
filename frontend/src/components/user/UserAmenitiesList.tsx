import { SearchBar } from '../SearchBar'
import { TitleComponents } from '../TitleComponents'

const amenities = [
  {
    id: 1,
    name: 'grill',
    date: 'wednesday',
    time: '20:00 - 23:00',
    state: 'reserved',
  },
  {
    id: 2,
    name: 'grill',
    date: 'wednesday',
    time: '20:00 - 23:00',
    state: 'reserved',
  },
  {
    id: 3,
    name: 'grill',
    date: 'wednesday',
    time: '20:00 - 23:00',
    state: 'reserved',
  },
  {
    id: 4,
    name: 'grill',
    date: 'wednesday',
    time: '20:00 - 23:00',
    state: 'reserved',
  },
]

const listOptions = [
  {
    id: 1,
    name: 'Amenity',
  },
  {
    id: 2,
    name: 'Date',
  },
  {
    id: 3,
    name: 'Time',
  },
  {
    id: 4,
    name: 'State',
  },
  {
    id: 5,
    name: 'Delete',
  },
]

export const UserAmenitiesList = () => {
  const amenityListclass = 'capitalize text-base font-normal'

  // TODO USE EFFECT ACTUALIZAR LISTA DESPUES DE ELIMINAR 1 AMENITIE EVENT

  const renderAmenitiesList = () =>
    amenities.map((amenit) => (
      <div
        key={amenit.id}
        className="w-full grid grid-cols-5"
      >
        <div className={amenityListclass}>{amenit.name}</div>
        <div className={amenityListclass}>{amenit.date}</div>
        <div className={amenityListclass}>{amenit.time}</div>
        <div className={amenityListclass}>{amenit.state}</div>
        <div
          className={`${amenityListclass} cursor-pointer`}
          onClick={() => {
            alert(`${amenit.name} deleted`)
          }}
        >
          {' '}
          ❌{' '}
        </div>
      </div>
    ))

  const renderListOptions = () =>
    listOptions.map((option) => (
      <div
        className="font-bold capitalize"
        key={option.id}
      >
        {option.name}
      </div>
    ))

  return (
    <>
      <TitleComponents
        title="My reservations"/>
      <div className="w-[90%] h-[330px] pt-5 m-auto border border-black rounded-lg flex flex-col justify-start items-center bg-blue bg-opacity-20">
        <SearchBar
          userType="user"
          searchIn="amenities"
        />
        <div className="w-[90%] px-5 grid grid-cols-5 my-2 border-b-2 border-black">{renderListOptions()}</div>
        <div className="w-[90%] px-5 pt-1 h-[220px] overflow-y-scroll no-scrollbar">{renderAmenitiesList()}</div>
      </div>
    </>
  )
}
