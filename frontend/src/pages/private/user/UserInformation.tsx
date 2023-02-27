import { useState } from 'react'
import Accordion from '../../../components/Accordion'
import { userStore } from '../../../store/user'
import { useConsortiumStore } from '../../../store/consortium'

const UserInformation = () => {
  const [activeIndex, setActiveIndex] = useState('')

  const user = userStore((state) => state.userData)
  const consortium = user?.consortium?.find(() => true)
  console.log(consortium)

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
            <h4><b>Name:</b> {consortium?.name}</h4>
            <h4><b>Address:</b> {consortium?.address}</h4>
            <img src={consortium?.img} alt="" className=' w-20' />
          </div>
        </Accordion>
        <Accordion
          title="Administrator information"
          index="4"
          activeIndex={activeIndex}
          setActiveIndex={setActiveIndex}
        >
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. In illum magni et facere accusantium autem dicta,
          omnis repellat reprehenderit sed doloribus culpa maxime, nam, numquam inventore hic temporibus aliquam
          tenetur?
        </Accordion>
      </div>
    </div>
  )
}

export default UserInformation
