import { useState } from 'react'
import Accordion from '../../../components/Accordion'
import { userStore } from '../../../store/user'

const UserInformation = () => {
  const [activeIndex, setActiveIndex] = useState('')

  const user = userStore((state) => state.userData)
  const consortium = user?.consortium?.find(() => true)
  const admin = user?.consortium?.find(() => true)?.admin
  console.log(user)

  return (
    <div>
      <h3 className="font-bold text-xl ml-11 mt-7">Information</h3>
      <div className=" px-14">
        <Accordion
          title="Consortium information"
          index="3"
          activeIndex={activeIndex}
          setActiveIndex={setActiveIndex}
        >
          <div className="flex justify-around">
            <div>
              <h4>
                <b>Name:</b> {consortium?.name}
              </h4>
              <h4>
                <b>Address:</b> {consortium?.address}
              </h4>
            </div>
            <div className="overflow-hidden rounded-lg border border-blueDark relative items-center flex">
              <img
                src={consortium?.img}
                alt="card"
                className=" max-w-[170px] max-h-[170px] object-cover"
              />
            </div>
          </div>
        </Accordion>
        <Accordion
          title="Administrator information"
          index="4"
          activeIndex={activeIndex}
          setActiveIndex={setActiveIndex}
        >
          <div className="flex justify-around">
            <div>
              <h4>
                <b>Name:</b> {admin?.name} {admin?.lastname}
              </h4>
              <h4>
                <b>Email:</b> {admin?.email}
              </h4>
              <h4>
                <b>Phone:</b> {admin?.phone}
              </h4>
            </div>
            <div className="">
              <div className=" overflow-hidden rounded-lg border border-blueDark">
                <img
                  src={admin?.img}
                  alt="card"
                  className=" max-w-[170px] max-h-[170px] object-cover"
                />
              </div>
            </div>
          </div>
        </Accordion>
      </div>
    </div>
  )
}

export default UserInformation
