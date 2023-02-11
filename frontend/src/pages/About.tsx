import BackgroundImage from '../components/BackgroundImage'
import Container from '../components/Container'
import Hero from '../components/Hero'

const About = () => {
  return (
    <section className="bg-redLight w-full">
      <Hero imageUrl="./assets/boy-and-city.svg">
        <Container>
          <div className="w-full h-full flex items-center justify-center">
            <div className="w-full flex flex-row justify-between">
              <div className="w-[500px] py-16 animate-fadeInBottom text-blueDark">
                <h1 className="text-4.5xl font-bold">About Us</h1>
                <h2 className="text-2xl py-4">
                  We are a team that work everyday to develop great products that make people&apos;s lives easier.
                </h2>
                <ul className="text-2.5xl mt-32 h-[130px] flex flex-col justify-between">
                  <li className="text-transparent bg-clip-text bg-gradient-to-b from-blue to-black opacity-[.8]">
                    24 COUNTRIES
                  </li>
                  <li className="text-transparent bg-clip-text bg-gradient-to-b from-blue to-black opacity-[.8]">
                    3200 MEMBERS
                  </li>
                </ul>
              </div>
              <div className="relative w-[640px] h-[720px]">
                <div className="absolute w-[467px] h-[346px] bg-white top-0 left-0 rounded border-2 border-black drop-shadow-[0px_4px_1px_rgba(0,0,0,0.5)] transition ease-in-out delay-100 duration-300 hover:scale-105 animate-fadeInRight">
                  <img
                    src={'./assets/people3.svg'}
                    className="w-full"
                  />
                  <div className="absolute bottom-0 w-full h-full bg-[rgba(252,207,189,0.2)] transition ease-in-out delay-100 hover:opacity-[0] duration-300"></div>
                </div>
                <div className="absolute w-[446px] h-[346px] bg-white bottom-0 right-0 rounded border-2 border-black drop-shadow-[0px_4px_1px_rgba(0,0,0,0.5)] transition ease-in-out delay-100 duration-300 hover:scale-105 animate-fadeInLeft">
                  <img
                    src={'./assets/people4.svg'}
                    className="w-full"
                  />
                  <div className="absolute bottom-0 w-full h-full bg-[rgba(11,103,123,0.2)] transition ease-in-out delay-100 hover:opacity-[0] duration-300"></div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </Hero>
      <div className="relative w-full h-[800px] bg-redLight overflow-hidden">
        <Container>
          <div className="flex flex-row justify-between w-full h-full">
            <ul className="w-[560px] h-full flex flex-col pr-10 mt-6">
              <li className="py-10">
                <h2 className="text-2xl font-bold">MISION</h2>
                <p className="text-lg pl-8 mt-5">
                  We want to provide the best software for consortio management in Latin America.
                </p>
              </li>
              <li className="py-10">
                <h2 className="text-2xl font-bold">VISION</h2>
                <p className="text-lg pl-8 mt-5">
                  Helping people communicate and making everyday
                  <br />
                  life easier.
                </p>
              </li>
              <li className="py-10">
                <h2 className="text-2xl font-bold">VALUES</h2>
                <p className="text-lg pl-8 mt-5">Humans making products for humans.</p>
              </li>
            </ul>
            <div className="w-full h-full">
              <BackgroundImage imageUrl="./assets/people5.svg" />
            </div>
          </div>
        </Container>
      </div>
    </section>
  )
}

export default About
