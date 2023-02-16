import { useEffect, useState } from 'react'
import Container from '../../components/Container'
import GridLoader from 'react-spinners/GridLoader'
import { useParams } from 'react-router'
import { validateUserAccount } from '../../services/validateUserAccount'
import { renewValidateTokenAccount } from '../../services/renewValidateTokenAccount'
import BlueModal from '../../components/modal/BlueModal'
import { Link } from 'react-router-dom'

const Validate = () => {
  const [response, setResponse] = useState('loading')
  const [modalOpen, setModalOpen] = useState(false)
  const { token, id } = useParams()

  const validate = async (id: string, token: string) => {
    try {
      setResponse('loading')
      const resp = await validateUserAccount(id, token)
      console.log(resp, 'respuesta')
      if (resp.ok === true) setResponse('ok')
      if (resp.ok === false) setResponse('wrong')
      if (resp.ok === false && resp.msg === 'User is already validated') setResponse('ok')
    } catch (error) {
      // console.log(error)
      console.log('entro')
    }
  }

  const handleOnClick = async () => {
    if (id) {
      const resp = await renewValidateTokenAccount(id)
      if (resp.ok === true) setModalOpen(true)
    }
  }

  useEffect(() => {
    if (id && token) {
      // eslint-disable-next-line @typescript-eslint/no-floating-promises
      validate(id, token)
    }
  }, [])

  console.log(response)

  return (
    <Container>
      <BlueModal isOpen={modalOpen}>
        <p>A new token has been sended, check your email to validate your account.</p>
        <button className="bg-blue text-white text-lg w-14 h-10 rounded-2xl mt-6">
          <Link to="/">OK</Link>
        </button>
      </BlueModal>
      <div className=" h-screen flex items-center justify-center text-center">
        <div className="">
          {response === 'loading' && (
            <div>
              <h2 className="text-blueDark text-2xl font-bold">Validating account</h2>
              <GridLoader color="#002A61" />
            </div>
          )}
          {response === 'ok' && <h2 className="text-greenLight text-2xl font-bold">Your account has been validated</h2>}
          {response === 'wrong' && (
            <div>
              <h2 className="text-blueDark text-2xl font-bold">Token Has Expired</h2>
              <button
                className="bg-blueDark text-white text-xl w-60 h-12 rounded-2xl mb-5"
                onClick={handleOnClick}
              >
                RETRY
              </button>
            </div>
          )}
        </div>
      </div>
    </Container>
  )
}

export default Validate
