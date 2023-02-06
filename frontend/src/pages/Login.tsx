import { useEffect, useState } from 'react';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(email, password);
  };

  useEffect(() => {
    console.log(email);
  }, [email]);

  return (
    <div className="m-6 font-inter text-[28px]">
      <h1 className="text-[40px]">Welcome!</h1>
      <h2 className="ml-6 mb-12">Please fill your info to start</h2>
      <div className="w-[454px]">
        <form onSubmit={handleSubmit}>
          <h2 className="mb-3">E-mail</h2>
          <input
            className="border-b-2 border-blueDark mb-8 w-full placeholder:italic"
            type="email"
            placeholder="Enter your email"
            autoComplete="off"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <h2 className="mb-3">Password</h2>
          <input
            className="border-b-2 border-blueDark mb-5 w-full placeholder:italic"
            type="password"
            placeholder="Enter your password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button
            type="submit"
            className="bg-blueDark text-white text-2xl w-60 h-16 rounded-2xl block ml-auto mb-5"
          >
            LOG IN
          </button>
        </form>
        <div className="flex justify-end ">
          <h3>Not a member? </h3>
          <button className="ml-2 underline text-blueDark font-bold mb-5">Sign In</button>
        </div>
        <h3 className="mb-5">Or continue with</h3>
        <div className="flex justify-center">
          <button>Google</button>
          <button>Facebook</button>
          <button>Twitter</button>
        </div>
      </div>
    </div>
  );
};

export default Login;
