import { useState } from 'react'
import BackTitleComponent from '../BackTitleComponent'
import Container from '../Container'
import PaymentsTable from './PaymentsTable'
import { PaymentsValues } from '../../interfaces/paymentsInterfaces'

interface PaymentsProps {
  previusPage: string
  data: PaymentsValues[]
  setData: React.Dispatch<React.SetStateAction<PaymentsValues[]>>
  role: string
}

const Payments = ({ data, setData, previusPage, role }: PaymentsProps) => {
  const [member, setMember] = useState('')

  const renderSearch = () => (
    <div className="flex mt-6">
      <input
        onChange={(e) => {
          setMember(e.target.value)
        }}
        value={member}
        type="text"
        autoComplete="off"
        className="border border-black
                   p-1 rounded-lg w-full h-12
                   placeholder:italic placeholder:text-grey
                   px-5"
        placeholder="Search by member"
      />
      <i
        className="fa-solid fa-magnifying-glass
                    -ml-8 text-xl text-grey my-auto"
      ></i>
    </div>
  )

  return (
    <div className="w-full min-h-[680px] bg-white">
      <Container>
        <div className="mt-20">
          <BackTitleComponent
            title="Payments"
            navigateTo={previusPage}
          />
          <div className="flex justify-center">
            <div className="relative flex flex-col w-[67vw] min-w-[350px] max-w-[1200px]">
              {renderSearch()}
              <PaymentsTable
                filterValue={member}
                setData={setData}
                data={data}
                role={role}
              />
              {role === 'admin' && (
                <button className="absolute -bottom-24 right-0 text-lg bg-blueDark text-white px-12 py-3 rounded-lg">
                  Save changes
                </button>
              )}
            </div>
          </div>
        </div>
      </Container>
    </div>
  )
}

export default Payments
