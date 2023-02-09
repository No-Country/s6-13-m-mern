import React from 'react';

const Footer = () => {
  return (
    <div className="relative txt-[13px]">
      {/* <section className="curved relative bg-redLight h-[13vh] z-[1] "></section> */}
      <div className=" overflow-hidden min-w-full h-[13vh] mt-[-13vh] ">
        <svg
          viewBox="0 0 500 150"
          preserveAspectRatio="none"
          style={{ height: '100%', width: '100%' }}
        >
          <path
            d="M-0.00,49.85 C150.00,149.60 352.93,147.13 500.00,49.85 L500.00,149.60 L-0.00,149.60 Z"
            style={{ stroke: 'none', fill: '#4B4B4B' }}
          ></path>
        </svg>
      </div>
      <footer className="absolute top-[100%] min-w-full text-white bg-grey footer_bottom">
        <div className="flex justify-around gap-4 w-full mt-5">
          <div>
            <h3 className="mb-5">Contact us</h3>
            <ul>
              <li className="flex gap-4 mb-3">
                <img
                  src="./assets/mail_logo.svg"
                  alt="mail logo"
                />
                <a href="">sosconsortia@gmail.com</a>
              </li>
              <li className="flex gap-4 mb-3">
                <img
                  src="./assets/web_logo.svg"
                  alt="web lofo"
                />
                <a href="">www.sosconsortia.com</a>
              </li>
              <li className="flex gap-4 mb-3">
                <img
                  src="./assets/phone_logo.svg"
                  alt="phone logo"
                />
                <a href="">54 9 4987-6511</a>
              </li>
            </ul>
          </div>
          <div>
            <h3>Follow us on social media</h3>
            <ul className="flex flex-row gap-5 items-center justify-center">
              <li className="cursor-pointer">
                <img
                  src="./assets/instagram_logo.svg"
                  alt=""
                />
              </li>
              <li className="cursor-pointer">
                <img
                  src="./assets/facebook_logo.svg"
                  alt=""
                />
              </li>
              <li className="cursor-pointer">
                <img
                  src="./assets/twitter_logo.svg"
                  alt=""
                />
              </li>
            </ul>
          </div>
        </div>
        <div className="flex justify-center">
          <div className="border-t-[1px] border-blue-900 w-[85%]"></div>
        </div>
        <section className="flex flex-col justify-center items-center mt-5 mb-5 gap-6 ">
          <h3>Copyright NoCountry 2023. All rights reserved.</h3>
          <span className="flex">
            <img src="./assets/location_logo.svg"></img>CABA, Argetina
          </span>
        </section>
      </footer>
    </div>
  );
};

export default Footer;
