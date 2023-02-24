import { useState } from 'react'
import { SearchBar } from '../../../components/SearchBar'
import { TitleComponents } from '../../../components/TitleComponents'
import UserCreatePayments from '../user/createPayment/UserCreatePayments'

const documents = [
  {
    id: 1,
    title: 'LIQUIDACIÓN - 2/2023',
    name: 'RIVERA',
  },
  {
    id: 2,
    title: 'LIQUIDACIÓN - 1/2023',
    name: 'RIVERA',
  },
  {
    id: 3,
    title: 'LIQUIDACIÓN - 12/2023',
    name: 'RIVERA',
  },
  {
    id: 4,
    title: 'LIQUIDACIÓN - 11/2023',
    name: 'RIVERA',
  },
  {
    id: 5,
    title: 'LIQUIDACIÓN - 10/2023',
    name: 'RIVERA',
  },
  {
    id: 6,
    title: 'LIQUIDACIÓN - 9/2023',
    name: 'RIVERA',
  },
]

const UserDocuments = () => {
  const [create, setCreate] = useState(false)

  const renderDocumentList = () => (
    <div
      className="w-full h-[340px]
                    grid grid-cols-[repeat(auto-fill,220px)]
                    gap-x-16 gap-y-8
                    justify-center
                    overflow-y-auto no-scrollbar"
    >
      {documents.map((document) => (
        <div
          key={document.id}
          className="h-[140px] flex flex-col
                          items-center justify-between
                          border-2 border-black
                          rounded-xl bg-white
                          pt-4 pb-2 font-inter"
        >
          <h4 className="font-bold">{document.title}</h4>
          <img
            src="../assets/Pdf.svg"
            className="w-[32px]"
          />
          <p>{document.name}</p>
        </div>
      ))}
    </div>
  )

  return (
    <>
      {!create ? (
        <div>
          <TitleComponents title="Payments" />
          <div className="-translate-y-5 w-full flex justify-center">
            <div className="w-full ml-[10%]">
              <SearchBar
                userType="user"
                searchIn="documents"
              />
            </div>
          </div>
          <div className="w-full px-11 mb-5">{renderDocumentList()}</div>
          <button
            onClick={() => {
              setCreate(true)
            }}
            className="bg-blueDark text-white text-xl w-[360px] h-10 rounded-lg block mx-auto"
          >
            Create new payment
          </button>
        </div>
      ) : (
        <UserCreatePayments setCreate={setCreate} />
      )}
    </>
  )
}

export default UserDocuments
