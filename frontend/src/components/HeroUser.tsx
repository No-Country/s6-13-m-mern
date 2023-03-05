type Props = React.ComponentProps<'div'>

const HeroUser = ({ children }: Props) => {
  return (
    <div className="w-full min-h-screen">
      <div className=" pb-14 h-fit w-full bg-center bg-cover md:bg-[url('https://res.cloudinary.com/dozwd1ssj/image/upload/v1676311290/Amenities_etugxw.jpg')] ">
      {/* <div className=" pb-14 h-fit w-full"> */}
        {children}
      </div>
    </div>
  )
}

export default HeroUser
