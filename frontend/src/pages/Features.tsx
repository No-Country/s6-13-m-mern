const Features = () => {
  return (
    <section className="mt-20 mb-28 px-5 lg:px-44 max-w-[1700px]">
      <h1 className="animate-fadeInLeft text-4.5xl font-bold text-blueDark mb-6">Features</h1>
      <main className="sm:px-[10%]">
        <div className="w-full flex sm:flex-row flex-col-reverse items-center gap-2 mb-20 justify-between">
          <div className="w-fit">
            <div className=" justify-between animate-fadeInLeft">
              <h3 className="mb-5 text-[24px]">
                <span className="text-blueDark font-bold min-w-fit">How</span> to start with Consortia?
              </h3>
              <p className="mb-3 text-[18px]">
                <span className="text-blueDark font-semibold">Create</span> your account
              </p>
              <p className="mb-3 text-[18px]">
                <span className="text-blueDark font-semibold">Validate</span> your account
              </p>
              <p className="mb-3 text-[18px]">
                Wait to be <span className="text-blueDark font-semibold">accepted</span> in your consortium
              </p>
            </div>
          </div>
          <div>
            <img
              className="min-w-[200px] animate-fadeInRight"
              src="./assets/features/image1.png"
              alt=""
            />
          </div>
        </div>

        <div className="w-full flex sm:flex-row flex-col items-center gap-2 mb-20 justify-between">
          <div>
            <img
              className="min-w-[200px] animate-fadeInLeft"
              src="./assets/features/image2.png"
              alt=""
            />
          </div>
          <div className="w-fit">
            <div className="justify-between animate-fadeInLeft">
              <h3 className="mb-5 text-[22px] text-blueDark font-bold min-w-fit">As an owner or tenant you can:</h3>
              <p className="mb-3 text-[18px]">Organize your documents</p>
              <p className="mb-3 text-[18px]">Reserve amenities</p>
              <p className="mb-3 text-[18px]">Upload your payments</p>
              <p className="mb-3 text-[18px]">Make request to your administration</p>
              <p className="mb-3 text-[18px]">Participate in votes</p>
            </div>
          </div>
        </div>

        <div className="w-full flex sm:flex-row flex-col-reverse items-center gap-2 mb-20 justify-between">
          <div className="w-fit">
            <div className="justify-between animate-fadeInLeft">
              <h3 className="mb-5 text-[22px] text-blueDark font-bold min-w-fit">As an admin you can</h3>
              <p className="mb-3 text-[18px]">Choose between your different Consortium</p>
              <p className="mb-3 text-[18px]">Create and add members to your Consortium</p>
              <p className="mb-3 text-[18px]">Start votes</p>
              <p className="mb-3 text-[18px]">Managed members requests</p>
            </div>
          </div>
          <div>
            <img
              className="min-w-[200px] animate-fadeInRight"
              src="./assets/features/image3.png"
              alt=""
            />
          </div>
        </div>

        <div className="w-full flex sm:flex-row flex-col items-center gap-2 mb-20 justify-between">
          <div>
            <img
              className="min-w-[200px] animate-fadeInLeft"
              src="./assets/features/image4.png"
              alt=""
            />
          </div>
          <div className="w-fit">
            <div className="justify-between animate-fadeInLeft">
              <h3 className="mb-5 text-[20px] text-blueDark font-semibold underline min-w-fit">Coming soon</h3>
              <p className="mb-3 text-[18px]">Now you have all your functions in the confort of your Phone!</p>
              <p className="mb-3 text-[18px] text-center text-[#004AAD] font-semibold underline cursor-pointer">
                <a href="/underConstruction">Download App</a>
              </p>
            </div>
          </div>
        </div>
      </main>
    </section>
  )
}

export default Features
