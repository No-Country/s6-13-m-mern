import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  const [isNavOpen, setisNavOpen] = useState(false);

  const handleOpenNav = () => {
    setisNavOpen(!isNavOpen);
  };

  console.log(isNavOpen);

  return (
    <header>
      <nav className=" min-h-[96px] flex flex-wrap items-center justify-between md:justify-around w-full py-4 md:py-0 px-4 text-[15px] bg-blueDark fixed">
        <img
          src="/Logo-navBar.png"
          alt=""
          className="h-[80px] cursor-pointer"
        />
        <svg
          xmlns="http://www.w3.org/2000/svg"
          id="menu-button"
          className="h-6 w-6 cursor-pointer md:hidden block text-white"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          onClick={handleOpenNav}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h16M4 18h16"
          />
        </svg>
        <div
          className={(isNavOpen ? '' : 'hidden ') + 'w-full md:flex md:items-center md:w-auto'}
          id="menu"
        >
          <ul className="pt-4 text-[15px] text-white md:flex md:flex-row flex flex-col items-center md:justify-between md:pt-0">
            <li className="min-w-fit">
              <Link
                to=""
                className="uppercase md:p-4 py-2 block hover:underline md:hover:scale-110 transition duration-300 ease-out hover:ease-in"
              >
                Home
              </Link>
            </li>
            <li className="min-w-fit">
              <Link
                to="/about"
                className="uppercase md:p-4 py-2 block hover:underline md:hover:scale-110 transition duration-300 ease-out hover:ease-in"
              >
                About Us
              </Link>
            </li>
            <li className="min-w-fit">
              <Link
                to="/contact"
                className="uppercase md:p-4 py-2 block hover:underline md:hover:scale-110 transition duration-300 ease-out hover:ease-in"
              >
                Contact
              </Link>
            </li>
            <li className="min-w-fit">
              <Link
                to="/features"
                className="uppercase md:p-4 py-2 block hover:underline md:hover:scale-110 transition duration-300 ease-out hover:ease-in"
              >
                Features
              </Link>
            </li>
            <li className="min-w-fit">
              <Link
                to="prices"
                className="uppercase md:p-4 py-2 block hover:underline md:hover:scale-110 transition duration-300 ease-out hover:ease-in"
              >
                Prices
              </Link>
            </li>
          </ul>
          <section className="flex justify-center md:pl-28 md:pr-8 gap-5">
            <Link to="/login">
              <button className="uppercase px-8 py-1 bg-blue rounded-[16px] text-white min-w-fit hover:brightness-150 transition duration-300 ease-out hover:ease-in ">
                Log In
              </button>
            </Link>
            <Link to="/signin">
              <button className="uppercase px-8 py-1 bg-blueDark rounded-[16px] text-[#3189FF] border-[1px] border-[#3189FF] hover:border-[#ffff] hover:text-[#ffff] transition duration-300 ease-out hover:ease-in min-w-fit">
                Sign In
              </button>
            </Link>
          </section>
        </div>
      </nav>
    </header>
  );
};

export default Header;
