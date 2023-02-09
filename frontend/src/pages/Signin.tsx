import { Link } from 'react-router-dom';
import Container from '../components/Container';
import { useEffect, useState } from 'react';

const Signin = () => {
  const [data, setData] = useState({
    email:"",
    password:"",
    password2:"",
    name:"",
    lastName:"",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(data);
  };

  useEffect(() => {
    console.log(data);
  }, [data]);

  return (
    <Container>
      <div className=" font-sans text-[24px] py-14 h-max">
      <h1 className="text-[30px]">Welcome!</h1>
          <h2 className="ml-6 mb-8">Please fill your info to start</h2>
        <div className="w-full">
          <form
            onSubmit={handleSubmit}
            
          >
            <div className="flex justify-between">

            <div className="mx-auto w-[400px]">
              <input
                className="border-2 border-blueDark rounded-lg h-12 px-4 mb-8 w-full placeholder:italic placeholder:text-grey bg-transparent focus:outline-none text-lg"
                type="text"
                placeholder="Enter your name"
                autoComplete="off"
                name="name"
                value={data.name}
                onChange={(e) => setData({...data,name:e.target.value})}
              />
              <input
                className="border-2 border-blueDark rounded-lg h-12 px-4 mb-8 w-full placeholder:italic placeholder:text-grey bg-transparent focus:outline-none text-lg"
                type="text"
                placeholder="Enter your last name"
                name="lastname"
                value={data.lastName}
                onChange={(e) => setData({...data,lastName:e.target.value})}
              />
              <input
                className="border-2 border-blueDark rounded-lg h-12 px-4 mb-8 w-full placeholder:italic placeholder:text-grey bg-transparent focus:outline-none text-lg"
                type="email"
                placeholder="Enter your email"
                autoComplete="off"
                name="email"
                value={data.email}
                onChange={(e) => setData({...data,email:e.target.value})}
              />
            </div>
            <div className="mx-auto w-[400px]">
              <input
                className="border-2 border-blueDark rounded-lg h-12 px-4 mb-8 w-full placeholder:italic placeholder:text-grey bg-transparent focus:outline-none text-lg"
                type="password"
                placeholder="Enter your password"
                name="password"
                value={data.password}
                onChange={(e) => setData({...data,password:e.target.value})}
              />
              <input
                className="border-2 border-blueDark rounded-lg h-12 px-4 mb-8 w-full placeholder:italic placeholder:text-grey bg-transparent focus:outline-none text-lg"
                type="password"
                placeholder="Repeat your password"
                name="password2"
                value={data.password2}
                onChange={(e) => setData({...data,password2:e.target.value})}
              />
              
            </div>
            </div>
          <div className="flex justify-center mb-3">
            <input
              type="checkbox"
              className="w-7 mr-2"
            />
            <h3 className='text-lg'>
              I have read and agree to the
              <Link
                to=""
                className="ml-2 underline text-blueDark font-bold mb-5"
                >
                terms and conditions and privacy policy.
              </Link>
            </h3>
            </div>
            <div>
            <button
                type="submit"
                className="bg-blueDark text-white text-2xl w-60 h-16 rounded-2xl block ml-auto mb-2"
              >
                SIGN IN
              </button>
              <div className="flex justify-end text-lg">
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
              <button className='mx-3'><img src="/assets/social/Google.png" alt="" /></button>
              <button className='mx-3'><img src="/assets/social/Facebook.png" alt="" /></button>
              <button className='mx-3'><img src="/assets/social/Twitter.png" alt="" /></button>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Signin;
