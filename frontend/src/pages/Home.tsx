import { useState } from 'react'
import Container from '../components/Container'
import Hero from '../components/Hero'
import WhatsappDialog from '../components/WhatsappDialog'

const Home = () => {
  const [show, setShow] = useState(false)

  return (
    <section className="bg-content bg-redLight w-full">
      {show && <WhatsappDialog setShow={setShow} />}

      <div className="relative drop-shadow-[0px_10px_7px_rgba(0,0,0,0.5)] z-10">
        <Hero imageUrl="https://res.cloudinary.com/dozwd1ssj/image/upload/v1676344015/Landing_h8moql.jpg">
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
                    <button
                      onClick={() => { setShow(true) }}
                      className="flex items-center bg-[#00BB2D] rounded-full text-white text-xl font-bold gap-x-4 pl-8 pr-9 py-3 drop-shadow-[0px_5px_1px_rgba(0,0,0,0.5)] hover:-translate-y-1 hover:translate-x-1 hover:bg-[#34b7f1] hover:drop-shadow-[-3px_8px_1px_rgba(0,0,0,0.4)] transition duration:100 hover:scale-105 fa"
                    >
                      <img src={'../assets/wsapp_logo.svg'} />
                      <span>Contact us!</span>
                    </button>
                  </div>
                </div>
                <div className="relative w-[580px] h-[535px] animate-fadeInRight mt-1">
                  <div className="absolute w-[379px] h-[281px] bg-white top-0 left-0 rounded-lg origin-top-left rotate-[-1.78deg] border-2 border-black drop-shadow-[0px_4px_1px_rgba(0,0,0,0.5)] transition ease-in-out delay-100 hover:-translate-y-10 hover:-translate-x-10 duration-200 overflow-hidden">
                    <img
                      src={'https://res.cloudinary.com/dozwd1ssj/image/upload/v1676391650/people2_fxkzjz.png'}
                      className="w-full"
                    />
                  </div>
                  <div className="absolute w-[402px] h-[299px] bg-white bottom-0 right-8 rounded-lg origin-bottom-right rotate-[6.12deg] border-2 border-black drop-shadow-[0px_4px_1px_rgba(0,0,0,0.5)] transition ease-in-out delay-100 hover:-translate-y-10 hover:translate-x-10 duration-300 overflow-hidden">
                    <img
                      src={'https://res.cloudinary.com/dozwd1ssj/image/upload/v1676391639/people1_nmlpyq.png'}
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
              "linear-gradient(rgba(247, 225, 225,.35), rgba(247, 225, 225,.35)), url('https://res.cloudinary.com/dozwd1ssj/image/upload/v1676389907/night-city_phlesg.png')",
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
