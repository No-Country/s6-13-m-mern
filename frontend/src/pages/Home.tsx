import Container from '../components/Container'
import Hero from '../components/Hero'

const Home = () => {
  return (
    <section className="bg-content bg-redLight w-full">
      <div className="relative drop-shadow-[0px_10px_7px_rgba(0,0,0,0.5)] z-10">
        <Hero imageUrl="./assets/buildings.svg">
          <Container>
            <div className="relative w-full h-full flex items-center justify-center">
              <div className="relative w-full h-[600px] flex flex-row justify-between">
                <div className="relative animate-fadeInBottom text-blueDark">
                  <h1 className="text-4.5xl font-bold py-2">
                    Your Ideal Software For
                    <br /> Consortia Management
                  </h1>
                  <div className="w-full flex justify-end">
                    <h2 className="text-2.5xl py-3">
                      Keep good comunication
                      <br />
                      with your community.
                    </h2>
                  </div>
                  <div className="absolute bottom-12">
                    <button className="flex items-center bg-[#00BB2D] rounded-full text-white text-xl font-bold gap-x-4 pl-8 pr-9 py-3 drop-shadow-[0px_5px_1px_rgba(0,0,0,0.5)] hover:-translate-y-1 hover:translate-x-1 hover:bg-[#34b7f1] hover:drop-shadow-[-3px_8px_1px_rgba(0,0,0,0.4)] transition duration:100 hover:scale-105 fa">
                      <svg
                        width="33.25"
                        height="33.25"
                        viewBox="0 0 54 53"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M45.6012 7.83984C43.1743 5.4118 40.2911 3.48775 37.1177 2.17846C33.9442 0.869167 30.5431 0.200495 27.1102 0.210936C12.7031 0.210936 0.975 11.8805 0.96914 26.2266C0.962767 30.7947 2.16691 35.2829 4.45898 39.2344L0.75 52.7109L14.6074 49.0934C18.4432 51.1714 22.7371 52.2589 27.0996 52.2574H27.1102C41.516 52.2574 53.243 40.5867 53.25 26.2418C53.2587 22.8206 52.587 19.4318 51.2738 16.2726C49.9607 13.1134 48.0324 10.2469 45.6012 7.83984ZM27.1102 47.8664H27.1008C23.2118 47.8676 19.3935 46.8268 16.043 44.8523L15.2496 44.3836L7.02656 46.5305L9.22148 38.5512L8.70469 37.7309C6.53014 34.2881 5.37802 30.2986 5.38242 26.2266C5.38242 14.3051 15.1336 4.60547 27.1184 4.60547C32.8676 4.5952 38.3854 6.86898 42.4583 10.9267C46.5312 14.9844 48.8255 20.4938 48.8367 26.243C48.832 38.1656 39.0855 47.8664 27.1102 47.8664ZM39.027 31.6723C38.3742 31.3465 35.1598 29.7738 34.5644 29.557C33.9691 29.3402 33.5297 29.2312 33.0949 29.8828C32.6602 30.5344 31.4074 31.9922 31.0266 32.4316C30.6457 32.8711 30.2648 32.9191 29.6121 32.5934C28.9594 32.2676 26.8535 31.582 24.3586 29.3672C22.4168 27.6434 21.1066 25.5152 20.7258 24.8648C20.3449 24.2145 20.6848 23.8617 21.0117 23.5383C21.3059 23.2465 21.6645 22.7789 21.9914 22.3992C22.3184 22.0195 22.4273 21.7477 22.6441 21.3141C22.8609 20.8805 22.7531 20.5008 22.5902 20.1762C22.4273 19.8516 21.1207 16.6512 20.577 15.3492C20.0461 14.0812 19.5082 14.2535 19.1074 14.2336C18.7266 14.2148 18.2871 14.2102 17.8547 14.2102C17.5241 14.2188 17.1989 14.2954 16.8992 14.4354C16.5996 14.5753 16.3321 14.7755 16.1133 15.0234C15.5145 15.675 13.827 17.25 13.827 20.4469C13.827 23.6437 16.1707 26.7375 16.4941 27.1711C16.8176 27.6047 21.0996 34.1707 27.6516 36.9867C28.8682 37.5077 30.1113 37.9646 31.3758 38.3555C32.9402 38.85 34.3641 38.7809 35.4891 38.6133C36.7441 38.427 39.3562 37.0406 39.8988 35.5219C40.4414 34.0031 40.4426 32.7023 40.2797 32.4316C40.1168 32.1609 39.6809 31.9969 39.027 31.6723Z"
                          fill="#F8F8F8"
                        />
                      </svg>
                      <span>Contact us!</span>
                    </button>
                  </div>
                </div>
                <div className="relative w-[580px] h-[535px] animate-fadeInRight mt-1">
                  <div className="absolute w-[379px] h-[281px] bg-white top-0 left-0 rounded-lg origin-top-left rotate-[-1.78deg] border-2 border-black drop-shadow-[0px_4px_1px_rgba(0,0,0,0.5)] transition ease-in-out delay-100 hover:-translate-y-10 hover:-translate-x-10 duration-200 overflow-hidden">
                    <img
                      src={'./assets/people2.svg'}
                      className="w-full"
                    />
                  </div>
                  <div className="absolute w-[402px] h-[299px] bg-white bottom-0 right-8 rounded-lg origin-bottom-right rotate-[6.12deg] border-2 border-black drop-shadow-[0px_4px_1px_rgba(0,0,0,0.5)] transition ease-in-out delay-100 hover:-translate-y-10 hover:translate-x-10 duration-300">
                    <img
                      src={'./assets/people1.svg'}
                      className="w-full"
                    />
                  </div>
                </div>
              </div>
              <ul className="absolute px-20 bottom-0 translate-y-6 flex flex-row justify-between text-white text-2xl w-full font-light font-inter">
                <li
                  className={
                    ' text-center py-7 bg-blue w-48 rounded-lg border-2 border-black drop-shadow-[0px_3px_1px_rgba(0,0,0,0.5)] cursor-default hover:bg-[#34b7f1] hover:-translate-y-3 hover:drop-shadow-[0px_20px_8px_rgba(0,0,0,0.3)] transition ease-in-out delay-100 duration-200'
                  }
                >
                  Administrate
                </li>
                <li
                  className={
                    ' text-center py-7 bg-grey w-48 rounded-lg border-2 border-black drop-shadow-[0px_3px_1px_rgba(0,0,0,0.5)] cursor-default hover:bg-[#34b7f1] hover:-translate-y-3 hover:drop-shadow-[0px_20px_8px_rgba(0,0,0,0.3)] transition ease-in-out delay-100 duration-200'
                  }
                >
                  Comunicate
                </li>
                <li
                  className={
                    ' text-center py-7 bg-blueDark w-48 rounded-lg border-2 border-black drop-shadow-[0px_3px_1px_rgba(0,0,0,0.5)] cursor-default hover:bg-[#34b7f1] hover:-translate-y-3 hover:drop-shadow-[0px_20px_8px_rgba(0,0,0,0.3)] transition ease-in-out delay-100 duration-200'
                  }
                >
                  Make it easy!
                </li>
              </ul>
            </div>
          </Container>
        </Hero>
      </div>

      <div className="w-full h-[725px]">
        <div
          className="h-full w-full bg-slate-800"
          style={{
            background:
              "linear-gradient(rgba(247, 225, 225,.35), rgba(247, 225, 225,.35)), url('./assets/night-city.svg')",
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          <Container>
            <div className="w-full h-[725px] pt-36">
              <div className="w-full">
                <h2 className="font-bold text-3xl text-blueDark">What&apos;s S.O.S Consortia?</h2>
                <p className="text-2xl font-inter">
                  It&apos;s a software that provides the <b>easiest</b> way to manage the key information of you
                  consortium
                </p>
                <ul className="relative list-disc text-2xl mt-12 font-inter w-full">
                  <li className="relative left-[13vw] max-w-max">Create a dashboard</li>
                  <li className="relative left-[44vw] max-w-max">Establishes rules of coexistence</li>
                  <li className="relative left-[25vw] max-w-max">Know the relevant data</li>
                  <li className="relative left-[6vw] max-w-max">Add your users</li>
                  <li className="relative left-[59vw] -translate-y-12 max-w-max">Show everyone&apos;s debts</li>
                </ul>
              </div>
            </div>
          </Container>
        </div>
      </div>
    </section>
  )
}

export default Home
