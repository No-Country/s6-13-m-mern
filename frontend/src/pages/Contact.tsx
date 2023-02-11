import Container from '../components/Container'

const Contact = () => {
  return (
    <section className="bg-content bg-white w-full h-full">
      <Container>
        <div className="w-full h-[750px] flex items-center">
          <div className="flex flex-row w-full justify-between">
            <div className="h-[564px] flex flex-col justify-between animate-fadeInLeft">
              <div>
                <h1 className="text-4.5xl font-bold text-blueDark">Contact</h1>
                <h2 className="text-2xl ml-9 py-2">Have a question? Send us a message</h2>
              </div>
              <form className="w-[508px] text-lg flex flex-col justify-between h-[410px]">
                <div className="w-full flex flex-row justify-between gap-x-6">
                  <div className="relative w-full">
                    <input
                      type={'text'}
                      className="p-3 w-full h-[54px] border-2 border-blueDark rounded-lg bg-white placeholder:italic"
                      placeholder={'Name'}
                      name={'name'}
                    />
                  </div>

                  <input
                    type={'email'}
                    className="p-3 w-full h-[54px] border-2 border-blueDark rounded-lg bg-white placeholder:italic"
                    placeholder={'Email'}
                    name={'email'}
                  />
                </div>

                <input
                  type={'text'}
                  className="p-3 w-full h-[54px] border-2 border-blueDark rounded-lg bg-white placeholder:italic"
                  placeholder={'Subject'}
                  name={'subject'}
                />

                <textarea
                  className="p-3 w-full h-[141px] border-2 border-blueDark rounded-lg bg-white placeholder:italic"
                  placeholder={'Message'}
                  name={'message'}
                />

                <input
                  type={'submit'}
                  className="p-3 w-full h-[54px] rounded-lg bg-blueDark text-white"
                  value={'Send'}
                />
              </form>
            </div>
            <div className="w-[564px] h-[564px] bg-[#D9D9D9] rounded-lg overflow-hidden border-2 border-black animate-fadeInRight">
              <img
                src={'./assets/person-typing.svg'}
                className="w-full"
              />
            </div>
          </div>
        </div>
      </Container>
      <div className="h-[850px] bg-palePink">
        <Container>
          <div className="relative w-full h-[700px] px-10 pt-16">
            <div className="absolute top-8 right-2 w-[330px] h-[304px] rounded-lg border-2 border-black overflow-hidden">
              <img
                src={'./assets/building-facade1.svg'}
                className="w-full"
              />
            </div>
            <div className="absolute bottom-2 -right-6 w-[280px] h-[342px] rounded-lg border-2 border-black overflow-hidden">
              <img
                src={'./assets/building-facade2.svg'}
                className="w-full"
              />
            </div>
            <div className="box-border w-full h-[541px] border-[2.5px] border-grey rounded-lg overflow-hidden">
              <iframe
                className="w-full h-full"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3285.300203244893!2d-58.46197998417577!3d-34.57126976329002!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bcb5d9ca1ded77%3A0xf196efb54eb631d0!2sCap.%20Gral.%20Ram%C3%B3n%20Freire%201609%2C%20Buenos%20Aires!5e0!3m2!1ses!2sar!4v1675630330397!5m2!1ses!2sar"
                loading="lazy"
              ></iframe>
            </div>
          </div>
        </Container>
      </div>
    </section>
  )
}

export default Contact
