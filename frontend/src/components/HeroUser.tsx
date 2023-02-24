type Props = React.ComponentProps<'div'>

const HeroUser = ({ children }: Props) => {
  return (
    <div className="w-full h-screen min-h-[700px]">
      <div className="h-full w-full bg-[url('https://res.cloudinary.com/dozwd1ssj/image/upload/v1676311290/Amenities_etugxw.jpg')] bg-center bg-cover">
        {children}
      </div>
    </div>
  )
}

export default HeroUser
