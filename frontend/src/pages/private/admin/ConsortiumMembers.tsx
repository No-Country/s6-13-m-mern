import { useEffect, useState } from 'react'
import Autocomplete from '../../../components/Autocomplete'
import getAllUsersService from '../../../services/getAllUsersService'
import { UserInformation } from '../../../interfaces/authInterfaces'
import getUserByIdService from '../../../services/getUserByIdService'
import Container from '../../../components/Container'
import WhiteModal from '../../../components/modal/WhiteModal'

const ConsortiumMembers = () => {
  const [users, setUsers] = useState<UserInformation[]>([])
  const [filteredUsers, setFilteredUsers] = useState<UserInformation[]>([])
  const [selectedUser, setSelectedUser] = useState<UserInformation>()
  const [input, setInput] = useState('')
  const [modalOpen, setModalOpen] = useState(false)

  const filter = (value: string) => {
    // eslint-disable-next-line array-callback-return
    const filtered = users.filter((el) => {
      if (
        el.name.toLowerCase().includes(value.toLowerCase()) ||
        el.email.toLocaleLowerCase().includes(value.toLowerCase()) ||
        el.lastname.toLocaleLowerCase().includes(value.toLowerCase())
      ) {
        return true
      }
    })
    setFilteredUsers(filtered)
    console.log(filtered)
  }

  const getUsers = async () => {
    const users: UserInformation[] = await getAllUsersService()
    setUsers(users)
    console.log(users)
  }

  useEffect(() => {
    // eslint-disable-next-line @typescript-eslint/no-floating-promises
    getUsers()
  }, [])

  // const getUser = async (id)=>{
  //   getUserByIdService(id)
  // }

  return (
    <Container>
      <WhiteModal
        isOpen={modalOpen}
        toggle={() => {
          setModalOpen(false)
        }}
      >
        { selectedUser?.role === 'user' &&
          <>
            <h2 className=" text-xl font-bold text-blueDark mb-7">A member has been found!</h2>
            <div className=" px-8 text-start text-base">
              <h4 className=" text-blueDark">Email</h4>
              <p className="ml-4 mb-3">{selectedUser?.email}</p>
              <h4 className=" text-blueDark">Name</h4>
              <p className="ml-4 mb-3">
                {selectedUser?.name} {selectedUser?.lastname}
              </p>
            </div>
            <div className="flex justify-center mt-6">
              <button className="bg-blueDark text-white text-base w-28 h-8 rounded-lg mx-3">Add member</button>
              <button
                className="bg-white text-blueDark border-blueDark border text-base w-28 h-8 rounded-lg mx-3"
                onClick={() => {
                  setModalOpen(false)
                }}
              >
                Cancel
              </button>
            </div>
          </>
        }
        { selectedUser?.role === 'tenant' &&
          <>
            <h2 className=" text-xl font-bold text-blueDark mb-7">This person belongs to another consortium, cannot be added</h2>
            <div className=" px-8 text-start text-base">
              <h4 className=" text-blueDark">Email</h4>
              <p className="ml-4 mb-3">{selectedUser?.email}</p>
              <h4 className=" text-blueDark">Name</h4>
              <p className="ml-4 mb-3">
                {selectedUser?.name} {selectedUser?.lastname}
              </p>
            </div>
            <div className="flex justify-center mt-6">
              <button
                className="bg-white text-blueDark border-blueDark border text-base w-28 h-8 rounded-lg mx-3"
                onClick={() => {
                  setModalOpen(false)
                }}
              >
                Ok
              </button>
            </div>
          </>
        }
      </WhiteModal>
      <div className=" h-screen">
        <h2 className=" text-[28px] font-bold text-blueDark mt-16 mb-8">Members</h2>
        <Autocomplete
          options={filteredUsers}
          setSelectedOption={(u) => {
            setSelectedUser(u)
          }}
          loading
          endSearch={() => {
            setModalOpen(true)
          }}
          onInputChange={(e) => {
            setInput(e.target.value)
            filter(e.target.value)
          }}
          value={input}
          name="user"
        />
      </div>
    </Container>
  )
}

export default ConsortiumMembers
