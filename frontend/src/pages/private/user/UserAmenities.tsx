import { useState } from 'react'
import Calendar from 'react-calendar'

const UserAmenities = () => {
  const [value, onChange] = useState(new Date())
  const amenities = ['Grill', 'Pool', 'MPR', 'Terrace', 'Barbecue', 'Laundry']

  return (
    <div className="py-12 grid justify-center">
      <text className="text-[#00060D] font-bold text-xl mb-5">Make your reservation</text>
      <select className="border-[1px] mb-5 border-[#324054] rounded-md h-[40px] text-center w-[130px] bg-[#F4F4F4]">
        {amenities.map((el, idx) => (
          <option key={idx}>{el}</option>
        ))}
      </select>
      <div className="flex items-center gap-6">
        <div>
          <text className="text-[#324054] text-md font-bold">Select date</text>
          <Calendar
            className="bg-[#002A61] text-[#B3B3B3] w-[240px] h-[241px] text-center p-1 grid rounded-md"
            onChange={onChange}
            value={value}
            calendarType={'Arabic'}
          />
        </div>
        <div className="text-[#324054] w-[300px] font-bold grid">
          <label className="mb-2">Select time</label>
          <div className="flex gap-4">
            <div className="grid">
              <label>From</label>
              <select className="border-[1px] border-[#324054] rounded-md h-[40px] text-center w-[130px]">
                <option placeholder="20:00">22:00 </option>
              </select>
            </div>
            <div className="grid">
              <label>To</label>
              <select className="border-[1px] border-[#324054] rounded-md h-[40px] text-center w-[130px]">
                <option placeholder="20:00">23:00 </option>
              </select>
            </div>
          </div>
          <div className="mt-20 flex gap-4">
            <button className="border-[1px] h-[48px] w-[180px] border-[#002A61] rounded-lg text-sm bg-[#f8f8f8] text-[#002A61]">
              My reservations
            </button>
            <button className="h-[48px] w-[180px] bg-[#002A61] rounded-lg text-sm text-[#f8f8f8]">Reserve</button>
          </div>
        </div>
      </div>
    </div>
  )
}
export default UserAmenities
