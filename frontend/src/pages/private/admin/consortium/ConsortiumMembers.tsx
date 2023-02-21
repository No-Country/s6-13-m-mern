import { useEffect, useState } from 'react'
import Autocomplete from '../../../../components/Autocomplete'
import getAllUsersService from '../../../../services/getAllUsersService'
import { UserInformation } from '../../../../interfaces/authInterfaces'
// import getUserByIdService from '../../../services/getUserByIdService'
import Container from '../../../../components/Container'
import WhiteModal from '../../../../components/modal/WhiteModal'
import BlueModal from '../../../../components/modal/BlueModal'
import addMembersService from '../../../../services/addMembersService'
import PulseLoader from 'react-spinners/PulseLoader'
import removeMembersService from '../../../../services/removeMemberService'
import { useConsortiumStore } from '../../../../store/consortium'

const ConsortiumMembers = () => {
  const [users, setUsers] = useState<UserInformation[]>([])
  const [consortiaUsers, setConsortiaUsers] = useState<UserInformation[]>([])
  const [filteredUsers, setFilteredUsers] = useState<UserInformation[]>([])
  const [selectedUser, setSelectedUser] = useState<UserInformation>()
  const [input, setInput] = useState('')
  const [modalOpen, setModalOpen] = useState(false)
  const [confirmModal, setConfirmModal] = useState(false)
  const [deleteMode, setDeleteMode] = useState(false)
  const [loading, setLoading] = useState(false)

  const consortiumId = useConsortiumStore.getState().consortiumData?._id

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
    if (consortiumId) {
      const consUsers = users.filter((el) => el.consortium.includes(consortiumId))
      setConsortiaUsers(consUsers)
    }
  }

  useEffect(() => {
    // eslint-disable-next-line @typescript-eslint/no-floating-promises
    getUsers()
  }, [])

  const handleAdd = async (userId: string) => {
    setLoading(true)
    if (consortiumId) {
      await addMembersService(consortiumId, userId)
      setModalOpen(false)
      setLoading(false)
      setConfirmModal(true)
      // eslint-disable-next-line @typescript-eslint/no-floating-promises
      getUsers()
    }
  }

  const handleDelete = async (userId: string) => {
    setLoading(true)
    if (consortiumId) {
      await removeMembersService(consortiumId, userId)
      setModalOpen(false)
      setLoading(false)
      setConfirmModal(true)
      // eslint-disable-next-line @typescript-eslint/no-floating-promises
      getUsers()
    }
  }

  return (
    <Container>
      <WhiteModal
        isOpen={modalOpen}
        toggle={() => {
          setModalOpen(false)
        }}
      >
        {selectedUser && deleteMode ? (
          <>
            <h2 className=" text-xl font-bold text-blueDark mb-7">
              Do you want to remove the user {selectedUser?.name} {selectedUser?.lastname}?
            </h2>
            <div className="flex justify-center mt-6">
              <button
                className="bg-blueDark text-white text-base w-36 h-8 rounded-lg mx-3"
                onClick={() => {
                  // eslint-disable-next-line @typescript-eslint/no-floating-promises
                  handleDelete(selectedUser._id)
                }}
              >
                {loading ? <PulseLoader color="white" /> : 'Delete Member'}
              </button>
              <button
                className="bg-white text-blueDark border-blueDark border text-base w-36 h-8 rounded-lg mx-3"
                onClick={() => {
                  setModalOpen(false)
                  setDeleteMode(false)
                }}
              >
                Cancel
              </button>
            </div>
          </>
        ) : selectedUser?.consortium.length === 0 ? (
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
              <button
                className="bg-blueDark text-white text-base w-28 h-8 rounded-lg mx-3"
                onClick={() => {
                  // eslint-disable-next-line @typescript-eslint/no-floating-promises
                  handleAdd(selectedUser._id)
                }}
              >
                {loading ? <PulseLoader color="white" /> : 'Add Member'}
              </button>
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
        ) : (
          <>
            <h2 className=" text-xl font-bold text-blueDark mb-7">
              This person belongs to another consortium, cannot be added
            </h2>
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
        )}
      </WhiteModal>
      <BlueModal
        isOpen={confirmModal}
        toggle={() => {
          setConfirmModal(false)
        }}
      >
        <p>
          {selectedUser?.name} {selectedUser?.lastname} has been {deleteMode ? 'delete from' : 'added to'} consortium
          “Av. Belgrano 499”
        </p>
        <button
          onClick={() => {
            setConfirmModal(false)
            setDeleteMode(false)
          }}
          className="bg-blue text-white text-lg w-14 h-10 rounded-2xl mt-6"
        >
          OK
        </button>
      </BlueModal>
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
        <table className="w-full text-left my-12">
          <thead>
            <tr className=" border-b border-b-greyLight">
              <th>Name</th>
              <th>Email</th>
              <th>Contact</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {consortiaUsers.map((user) => (
              <tr
                className=" border-b border-b-greyLight"
                key={user._id}
              >
                <td className="py-4">
                  {user.name} {user.lastname}
                </td>
                <td className="py-4">{user.email}</td>
                <td className="py-4">{user.phone}</td>
                <td className="py-4 text-end">
                  <button
                    className=" bg-red text-white text-sm w-32 h-8 rounded-2xl mx-3"
                    onClick={() => {
                      setSelectedUser(user)
                      setDeleteMode(true)
                      setModalOpen(true)
                    }}
                  >
                    Remove member
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </Container>
  )
}

export default ConsortiumMembers
