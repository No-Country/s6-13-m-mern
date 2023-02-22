import Container from '../components/Container'

const Features = () => {
  return (
    <section>
      <Container>
        <div className="w-full h-[750px] flex items-center">
          <div className="flex flex-row w-full justify-between">
            <div className="h-[564px] flex flex-col justify-between animate-fadeInLeft">
              <div>
                <h1 className="text-4.5xl font-bold text-blueDark">Features</h1>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}

export default Features
