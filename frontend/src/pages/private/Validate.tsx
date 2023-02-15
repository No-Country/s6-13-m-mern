import { useEffect, useState } from 'react'
import Container from '../../components/Container'
import GridLoader from 'react-spinners/GridLoader'
import { useParams } from 'react-router'
import { validateUserAccount } from '../../services/validateUserAccount'

const Validate = () => {
  const [response, setResponse] = useState('loading')
  const { token, id } = useParams()
  // console.log(token)
  // console.log(id)

  useEffect(() => {
    if (id && token) {
      const resp = validateUserAccount(id, token)
      console.log(resp)
    }
  }, [])

  return (
    <Container>
      <div className=" h-screen flex items-center justify-center text-center">
        <div className="">
          {response === 'loading' && (
            <div>
              <h2 className="text-blueDark text-2xl font-bold">Validating account</h2>
              <GridLoader color="#002A61" />
            </div>
          )}
          <h2 className="text-greenLight text-2xl font-bold">Your account has been validated</h2>
          <h2 className="text-blueDark text-2xl font-bold">Token Has Expired</h2>
          <button className="bg-blueDark text-white text-xl w-60 h-12 rounded-2xl mb-5">RETRY</button>
        </div>
      </div>
    </Container>
  )
}

export default Validate
