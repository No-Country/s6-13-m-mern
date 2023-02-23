import { useState } from 'react'
import Accordion from '../../../components/Accordion'

const UserInformation = () => {
  const [activeIndex, setActiveIndex] = useState('')

  return (
    <div>
      <h3 className="font-bold text-xl ml-11 mt-7">Information</h3>
      <div className=" px-14">
        <Accordion
          title="Owner information"
          index="1"
          activeIndex={activeIndex}
          setActiveIndex={setActiveIndex}
        >
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. In illum magni et facere accusantium autem dicta,
          omnis repellat reprehenderit sed doloribus culpa maxime, nam, numquam inventore hic temporibus aliquam
          tenetur?
        </Accordion>
        <Accordion
          title="Tenant information"
          index="2"
          activeIndex={activeIndex}
          setActiveIndex={setActiveIndex}
        >
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. In illum magni et facere accusantium autem dicta,
          omnis repellat reprehenderit sed doloribus culpa maxime, nam, numquam inventore hic temporibus aliquam
          tenetur?
        </Accordion>
        <Accordion
          title="Comunity information"
          index="3"
          activeIndex={activeIndex}
          setActiveIndex={setActiveIndex}
        >
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. In illum magni et facere accusantium autem dicta,
          omnis repellat reprehenderit sed doloribus culpa maxime, nam, numquam inventore hic temporibus aliquam
          tenetur? Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum voluptates animi ad exercitationem
          cupiditate repellendus iste ipsam corrupti similique beatae. Aspernatur obcaecati consequuntur nam
          necessitatibus id, eaque laudantium placeat maxime. Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Sapiente iusto temporibus impedit voluptas tempora velit officiis omnis id. Autem nesciunt voluptate dolor
          quaerat, assumenda rem sequi veritatis molestiae labore a!
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
