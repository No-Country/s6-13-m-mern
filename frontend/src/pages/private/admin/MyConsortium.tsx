import Container from '../../../components/Container'

const MyConsortium = () => {
  return (
    <section>
      <div className="pt-12 pl-16">
        <h2 className="text-blueDark text-lg font-bold">My consortiums</h2>
      </div>
      <Container>
        <div className="flex gap-4">
          <div className="pt-12 w-64 relative">
            <img
              src="https://res.cloudinary.com/dozwd1ssj/image/upload/v1676344376/Card_Home_Admin_omrprw.png"
              alt="card"
            />
            <span className="text-lg font-semibold absolute bottom-2 pl-12 w-full border-t-2 border-black">
              Av. Belgrano 499
            </span>
          </div>
          <div className="flex flex-col items-center bg-blue mt-12 w-64 rounded-lg border-2 border-black">
            <img src="../assets/Vector.png" alt="icon" className='mt-10 mb-6'/>
            <p className='text-white text-center'>Add consortium</p>
          </div>
        </div>
      </Container>
    </section>
  )
}

export default MyConsortium
