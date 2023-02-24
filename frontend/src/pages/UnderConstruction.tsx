const UnderConstruction = () => {
  return (
    <div className="w-full min-h-[750px] bg-white flex justify-center items-center">
      <div className="w-[427px] h-[347px] border-black border-2 rounded-lg flex justify-center items-center">
        <div>
          <h3 className="text-xl text-blueDark font-bold">Page under construction!</h3>

          <img
            className="w-[244px] h-[177px] mt-[37px]"
            src={'https://res.cloudinary.com/dozwd1ssj/image/upload/v1677177926/Happy_Bunch_Desk_misd47.png'}
          />
        </div>
      </div>
    </div>
  )
}

export default UnderConstruction
