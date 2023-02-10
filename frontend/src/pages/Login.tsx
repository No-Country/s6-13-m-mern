import { useEffect, useState } from 'react';
import Container from '../components/Container';
import { Link } from 'react-router-dom';
import BackgroundImage from '../components/BackgroundImage';
import { useForm, SubmitHandler } from 'react-hook-form'

interface FormData {
  email: string;
  password: string;
}

const Login = () => {

  const { register, handleSubmit, formState: { errors, isDirty, isValid }, watch } = useForm({mode:'onTouched'}) 

  //todo Ver any, no sirve formData..
  const customSubmit:SubmitHandler<any> = (data) => {
    console.log(data)
}
   

  return (
    <BackgroundImage imageUrl="/assets/oneBuild.svg">
          {(errors.email?.type === 'required' || errors.password?.type === 'required') && <p className='absolute w-full h-8 px-8 bg-red rounded-b-sm border border-black text-lg font-sans text-white'>Complete all required fields</p>}
          {errors.email?.type === 'pattern' && <p className='absolute w-full h-8 px-8 bg-red rounded-b-sm border border-black text-lg font-sans text-white'>It's not a valid e-mail</p>}
      <Container>
        <div className=" font-sans text-[24px] py-14 h-max">
          <h1 className="text-[30px]">Welcome!</h1>
          <h2 className="ml-6 mb-8">Please fill your info to start</h2>
          <div className="w-[454px]">
            <form onSubmit={handleSubmit(customSubmit)}>
              <input
              className={`border-2 ${ !errors.email ? 'border-blueDark' : 'border-red' } rounded-lg h-12 px-4 mb-8 w-full placeholder:italic placeholder:text-grey bg-transparent focus:outline-none text-lg`}
              type="email"
              placeholder="Enter your email"
              autoComplete="off"
              {...register('email',{ 
                required:true,
                pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/i})}
              />
              <input
                className={`border-2 ${ !errors.password ? 'border-blueDark' : 'border-red' } rounded-lg h-12 px-4 mb-8 w-full placeholder:italic placeholder:text-grey bg-transparent focus:outline-none text-lg`}
                type="password"
                placeholder="Enter your password"
                {...register('password',{ 
                  required:true})} 
              />
              <button
                type="submit"
                className="bg-blueDark disabled:opacity-60 text-white text-xl w-60 h-12 rounded-2xl block ml-auto mb-5"
                disabled={!isDirty || !isValid}
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
