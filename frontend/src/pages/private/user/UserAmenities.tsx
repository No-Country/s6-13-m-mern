import { useState } from 'react'
import CalendarComponent from '../../../components/calendar/CalendarComponent'
import ListBox from '../../../components/filters/ListBox'

const filter = [
  {
    id: 1,
    name: 'Active',
    img: 'https://cdn-icons-png.flaticon.com/512/5610/5610944.png',
  },
  {
    id: 2,
    name: 'Inactive',
    img: 'https://cdn-icons-png.flaticon.com/512/399/399274.png',
  },
]
const unity = [
  {
    id: 1,
    name: 'Unity 1',
    img:
      'https://w7.pngwing.com/pngs/405/859/png-transparent-building-cartoon-facade-building-service-condominium-apartment.png',
  },
  {
    id: 2,
    name: 'Unity 2',
    img:
      'https://w7.pngwing.com/pngs/405/859/png-transparent-building-cartoon-facade-building-service-condominium-apartment.png',
  },
  {
    id: 3,
    name: 'Unity 3',
    img:
      'https://w7.pngwing.com/pngs/405/859/png-transparent-building-cartoon-facade-building-service-condominium-apartment.png',
  },
]
const user = [
  {
    id: 1,
    consortium: [1],
    name: 'Mónica',
    lastName: 'Rivera',
    isAdmin: false,
    googleId: '123456789',
    email: 'name@email.com',
    password: '123456789',
    isValidated: true,
    status: 1,
    token: '123456789',
    apt: 'abcde',
    img: 'https://www.boardandvellum.com/wp-content/uploads/2019/06/3x2-jack_apartments-lobby-view_to_courtyard.jpg',
  },
]
const amenity = [
  {
    id: 1,
    name: 'SUM',
    description: 'Sala de usos múltiples',
    reservable: true,
    size: 100,
    reserve: [1, 2, 3],
    consortuim: 1,
    img: 'https://www.boardandvellum.com/wp-content/uploads/2019/06/3x2-jack_apartments-lobby-view_to_courtyard.jpg',
    schedule: 1,
  },
]
const reserve = [
  {
    id: 1,
    user: 1,
    startDate: '2021-08-01 00:00:00',
    endDate: '2021-08-01 00:00:00',
    amenity: 1,
    status: 1,
  },
  {
    id: 2,
    user: 1,
    startDate: '2021-08-01 00:00:00',
    endDate: '2021-08-01 00:00:00',
    amenity: 1,
    status: 1,
  },
  {
    id: 3,
    user: 1,
    startDate: '2021-08-01 00:00:00',
    endDate: '2021-08-01 00:00:00',
    amenity: 1,
    status: 1,
  },
]
const hours = [
  {
    id: 0,
    name: '00:00 am',
    value: '00:00:00',
    avlble: true,
  },
  {
    id: 1,
    name: '01:00 am',
    value: '01:00:00',
    avlble: true,
  },
  {
    id: 2,
    name: '02:00 am',
    value: '02:00:00',
    avlble: true,
  },
  {
    id: 3,
    name: '03:00 am',
    value: '03:00:00',
    avlble: true,
  },
  {
    id: 4,
    name: '04:00 am',
    value: '04:00:00',
    avlble: true,
  },
  {
    id: 5,
    name: '05:00 am',
    value: '05:00:00',
    avlble: true,
  },
  {
    id: 6,
    name: '06:00 am',
    value: '06:00:00',
    avlble: true,
  },
  {
    id: 7,
    name: '07:00 am',
    value: '07:00:00',
    avlble: true,
  },
  {
    id: 8,
    name: '08:00 am',
    value: '08:00:00',
    avlble: true,
  },
  {
    id: 9,
    name: '09:00 am',
    value: '09:00:00',
    avlble: true,
  },
  {
    id: 10,
    name: '10:00 am',
    value: '10:00:00',
    avlble: true,
  },
  {
    id: 11,
    name: '11:00 am',
    value: '11:00:00',
    avlble: true,
  },
  {
    id: 12,
    name: '12:00 pm',
    value: '12:00:00',
    avlble: true,
  },
  {
    id: 13,
    name: '13:00 pm',
    value: '13:00:00',
    avlble: true,
  },
  {
    id: 14,
    name: '14:00 pm',
    value: '14:00:00',
    avlble: true,
  },
  {
    id: 15,
    name: '15:00 pm',
    value: '15:00:00',
    avlble: true,
  },
  {
    id: 16,
    name: '16:00 pm',
    value: '16:00:00',
    avlble: true,
  },
  {
    id: 17,
    name: '17:00 pm',
    value: '17:00:00',
    avlble: true,
  },
  {
    id: 18,
    name: '18:00 pm',
    value: '18:00:00',
    avlble: true,
  },
  {
    id: 19,
    name: '19:00 pm',
    value: '19:00:00',
    avlble: true,
  },
  {
    id: 20,
    name: '20:00 pm',
    value: '20:00:00',
    avlble: true,
  },
  {
    id: 21,
    name: '21:00 pm',
    value: '21:00:00',
    avlble: true,
  },
  {
    id: 22,
    name: '22:00 pm',
    value: '22:00:00',
    avlble: true,
  },
  {
    id: 23,
    name: '23:00 pm',
    value: '23:00:00',
    avlble: true,
  },
]

const UserAmenities = () => {
  const [fromHour, setFromHour] = useState(hours)
  const [toHour, setToHour] = useState(hours)
  return (
    <div className="container p-4 flex flex-col">
      <div className="flex flex-row mt-4 mb-3">
        <h2 className="font-bold text-xl">Make your reservation</h2>
      </div>
      <div className="grid grid-cols-6 gap-6">
        <div className="col-span-6 sm:col-span-3">
          <ListBox
            label="Unity"
            options={unity} />
          <ListBox
            label="Amenity"
            options={amenity} />
          <div className=" m-3 mt-5 flex items-center justify-center">
            <CalendarComponent />
          </div>
        </div>
        <div className="col-span-3 sm:col-span-3 border border shadow">
          {/* <ListBox
      label="Filter"
      options={filter}
    /> */}
          <div className="grid grid-cols-6 gap-6">
            <div className="col-span-6 sm:col-span-6 m-2 mt-4 mb-3">
              <h3 className="font-bold text-l">Shifts available</h3>
              <h4 className="font-bold text-sm">Choose one</h4>
            </div>
            {/* <div className="col-span-4 sm:col-span-3">
              <ListBox
                label="From"
                options={fromHour} />
            </div>
            <div className="col-span-3 sm:col-span-3">
              <ListBox
                label="To"
                options={toHour} />
            </div> */}
              <div className="overflow-x-auto col-span-6 sm:col-span-6">
                <table className="min-w-full divide-y-2 divide-gray-200 text-sm">
                  <thead>
                    <tr>
                      <th className="px-4 py-2 text-left">
                        <label htmlFor="SelectAll" className="sr-only">Select All</label>

                        <input
                          type="checkbox"
                          id="SelectAll"
                          className="h-5 w-5 rounded border-gray-300" />
                      </th>
                      <th
                        className="whitespace-nowrap px-4 py-2 text-left font-medium text-gray-900"
                      >
                        Title
                      </th>
                      <th
                        className="whitespace-nowrap px-4 py-2 text-left font-medium text-gray-900"
                      >
                        Reserve Date
                      </th>
                      <th
                        className="whitespace-nowrap px-4 py-2 text-left font-medium text-gray-900"
                      >
                        Start Time
                      </th>
                      <th
                        className="whitespace-nowrap px-4 py-2 text-left font-medium text-gray-900"
                      >
                        End Time
                      </th>
                    </tr>
                  </thead>

                  <tbody className="divide-y divide-gray-200">
                    <tr>
                      <td className="px-4 py-2">
                        <label className="sr-only" htmlFor="Row1">Row 1</label>

                        <input
                          className="h-5 w-5 rounded border-gray-300"
                          type="checkbox"
                          id="Row1" />
                      </td>
                      <td
                        className="whitespace-nowrap px-4 py-2 font-medium text-gray-900"
                        >
                        Event 1
                      </td>
                      <td className="whitespace-nowrap px-4 py-2 text-gray-700">25/02/2023</td>
                      <td className="whitespace-nowrap px-4 py-2 text-gray-700">12:00</td>
                      <td className="whitespace-nowrap px-4 py-2 text-gray-700">13:00</td>
                    </tr>

                    <tr>
                      <td className="px-4 py-2">
                        <label className="sr-only" htmlFor="Row2">Row 2</label>

                        <input
                          className="h-5 w-5 rounded border-gray-300"
                          type="checkbox"
                          id="Row2" />
                      </td>
                      <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                        Event 2
                      </td>
                      <td className="whitespace-nowrap px-4 py-2 text-gray-700">25/02/2023</td>
                      <td className="whitespace-nowrap px-4 py-2 text-gray-700">13:00</td>
                      <td className="whitespace-nowrap px-4 py-2 text-gray-700">14:00</td>
                    </tr>

                    <tr>
                      <td className="px-4 py-2">
                        <label className="sr-only" htmlFor="Row3">Row 3</label>

                        <input
                          className="h-5 w-5 rounded border-gray-300"
                          type="checkbox"
                          id="Row3" />
                      </td>
                      <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                        Event 3
                      </td>
                      <td className="whitespace-nowrap px-4 py-2 text-gray-700">25/02/2023</td>
                      <td className="whitespace-nowrap px-4 py-2 text-gray-700">14:00</td>
                      <td className="whitespace-nowrap px-4 py-2 text-gray-700">15:00</td>
                    </tr>
                  </tbody>
                </table>
              </div>
      </div>
    </div>
      </div>
    <div className="flex flex-row mt-4 mb-3 justify-end ">
        <button
          type="submit"
          className="group relative flex rounded-md border border-transparent w-fit py-2 px-4 text-sm  font-bold hover:outline  focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
        >
          My Reservations
        </button>
        <button
          type="submit"
          className="group relative flex rounded-md border border-transparent w-fit bg-indigo-600 py-2 px-4 text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
        >
          Reserve
        </button>
      </div>
    </div>
  )
}

export default UserAmenities
