import Container from '../components/Container'

const Dashboard = () => {
  return (
    <section className="pb-32">
      <Container>
        <div className="relative w-[288px] h-[560px] left-[30px] top-[50px] bg-[#0064EBB8] rounded-[8px] border-[2.5px] border-[#00060D]">
          <div className="flex justify-center gap-4 pt-8 px-2">
            <img src="https://i.pravatar.cc/82" alt="photo" className="rounded-full border-black border-4" />
            <div className="flex flex-col justify-center text-center">
              <h4 className="font-bold text-lg">Alberto Gómez</h4>
              <span>Administrador</span>
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}

export default Dashboard
