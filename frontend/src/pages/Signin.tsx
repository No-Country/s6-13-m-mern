import { Link } from 'react-router-dom'
import Container from '../components/Container'
import { useEffect, useState } from 'react'

const Signin = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [password2, setPassword2] = useState('')
  const [name, setName] = useState('')
  const [lastName, setLastName] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log(email, password)
  }

  useEffect(() => {
    console.log(email)
  }, [email])

  return (
    <Container>
      <div className="font-inter text-[28px] py-24 h-max">
        <h1 className="text-[40px]">Welcome!</h1>
        <h2 className="ml-6 mb-12">Please fill your info to start</h2>
        <div className="w-full">
          <form
            onSubmit={handleSubmit}
            className="flex justify-between"
          >
            <div className="mr-auto">
              <h2 className="mb-3">Name</h2>
              <input
                className="border-b-2 border-blueDark mb-8 w-full placeholder:italic placeholder:text-grey bg-transparent focus:outline-none"
                type="text"
                placeholder="Enter your name"
                autoComplete="off"
                name="name"
                value={name}
                onChange={(e) => {
                  setName(e.target.value)
                }}
              />
              <h2 className="mb-3">Last Name</h2>
              <input
                className="border-b-2 border-blueDark mb-5 w-full placeholder:italic placeholder:text-grey bg-transparent focus:outline-none"
                type="text"
                placeholder="Enter your last name"
                name="lastname"
                value={lastName}
                onChange={(e) => {
                  setLastName(e.target.value)
                }}
              />
            </div>
            <div className="mr-auto">
              <h2 className="mb-3">E-mail</h2>
              <input
                className="border-b-2 border-blueDark mb-8 w-full placeholder:italic placeholder:text-grey bg-transparent focus:outline-none"
                type="email"
                placeholder="Enter your email"
                autoComplete="off"
                name="email"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value)
                }}
              />
              <h2 className="mb-3">Password</h2>
              <input
                className="border-b-2 border-blueDark mb-5 w-full placeholder:italic placeholder:text-grey bg-transparent focus:outline-none"
                type="password"
                placeholder="Enter your password"
                name="password"
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value)
                }}
              />
              <h2 className="mb-3">Repeat Password</h2>
              <input
                className="border-b-2 border-blueDark mb-5 w-full placeholder:italic placeholder:text-grey bg-transparent focus:outline-none"
                type="password"
                placeholder="Repeat your password"
                name="password2"
                value={password2}
                onChange={(e) => {
                  setPassword2(e.target.value)
                }}
              />
              <button
                type="submit"
                className="bg-blueDark text-white text-2xl w-60 h-16 rounded-2xl block ml-auto mb-5"
              >
                SIGN IN
              </button>
              <div className="flex justify-end ">
                <h3>Already a member? </h3>
                <Link
                  to="/login"
                  className="ml-2 underline text-blueDark font-bold mb-5"
                >
                  Log In
                </Link>
              </div>
            </div>
          </form>
          <h3 className="mb-5 text-center">Or continue with</h3>
          <div className="flex justify-center">
            <button>Google</button>
            <button>Facebook</button>
            <button>Twitter</button>
          </div>
          <div className="flex justify-center">
            <input
              type="checkbox"
              className="w-9 mr-3"
            />
            <h3>
              I have read and agree to the
              <Link
                to=""
                className="ml-2 underline text-blueDark font-bold mb-5"
              >
                terms and conditions and privacy policy.
              </Link>
            </h3>
          </div>
        </div>
      </div>
    </Container>
  )
}

export default Signin
