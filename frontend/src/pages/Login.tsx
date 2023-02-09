import { useEffect, useState } from 'react';
import Container from '../components/Container';
import { Link } from 'react-router-dom';
import BackgroundImage from '../components/BackgroundImage';
import useForm from '../hooks/useForm';

interface FormData {
  email: string;
  password: string;
}

const Login = () => {

  const [valid, setValid] = useState({
    emailTouched:false,
    emailValid:false,
    passwordTouched:false,
    passwordValid:false,  
    errorMsg:""  
  })

  const {emailTouched,emailValid,passwordTouched,passwordValid, errorMsg} = valid

  const { form, handleChange } = useForm<FormData>({
    email: '',
    password: '',
  });

  const { email, password } = form

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(email, password);
  };


  useEffect(() => {
    if (emailTouched){
      if (email === "") {
        setValid({...valid,emailValid:false, errorMsg:"Complete all required fields"})
      }
      else if (email.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i)) {
        setValid({...valid,emailValid:true, errorMsg:""})
      }
      else setValid({...valid,emailValid:false, errorMsg:"It's not an Email"})   
    }
  }, [email,emailTouched])
  
  useEffect(() => {
    if (passwordTouched){
      if (password === "") {
        setValid({...valid,passwordValid:false})
        if (errorMsg === ""){
          setValid({...valid, errorMsg:"Complete all required fields"})
        }
      }
      else  {
        setValid({...valid,passwordValid:true})
        if (emailValid){
          setValid({...valid, errorMsg:""})
        }
    }}
  }, [password,passwordTouched])
  

  return (
    <BackgroundImage imageUrl="/assets/oneBuild.svg">
          {errorMsg!=="" && <p className='absolute w-full h-8 px-8 bg-red rounded-b-sm border border-black text-lg font-sans text-white'>{errorMsg}</p>}
      <Container>
        <div className=" font-sans text-[24px] py-14 h-max">
          <h1 className="text-[30px]">Welcome!</h1>
          <h2 className="ml-6 mb-8">Please fill your info to start</h2>
          <div className="w-[454px]">
            <form onSubmit={handleSubmit}>
              <input
                className="border-2 border-blueDark rounded-lg h-12 px-4 mb-8 w-full placeholder:italic placeholder:text-grey bg-transparent focus:outline-none text-lg"
                type="email"
                placeholder="Enter your email"
                autoComplete="off"
                name="email"
                value={email}
                onChange={handleChange}
                onBlur={()=>setValid({...valid,emailTouched:true})}
              />
              <input
                className="border-2 border-blueDark rounded-lg h-12 px-4 mb-5 w-full placeholder:italic placeholder:text-grey bg-transparent focus:outline-none text-lg"
                type="password"
                placeholder="Enter your password"
                name="password"
                value={password}
                onChange={handleChange}
                onBlur={()=>setValid({...valid,passwordTouched:true})}
              />
              <button
                type="submit"
                className="bg-blueDark disabled:opacity-50 text-white text-2xl w-60 h-16 rounded-2xl block ml-auto mb-5"
                disabled={!emailValid || !passwordValid}
              >
                LOG IN
              </button>
            </form>
            <div className="flex justify-end ">
              <h3>Not a member? </h3>
              <Link
                to="/signin"
                className="ml-2 underline text-blueDark font-bold mb-5"
              >
                Sign In
              </Link>
            </div>
            <h3 className="mb-5">Or continue with</h3>
            <div className="flex justify-center">
              <button className='mx-3'><img src="/assets/social/Google.png" alt="" /></button>
              <button className='mx-3'><img src="/assets/social/Facebook.png" alt="" /></button>
              <button className='mx-3'><img src="/assets/social/Twitter.png" alt="" /></button>
            </div>
          </div>
        </div>
      </Container>
    </BackgroundImage>
  );
};

export default Login;
