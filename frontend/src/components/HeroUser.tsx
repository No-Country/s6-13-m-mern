import BackgroundUser from './BackgroundUser'

type Props = {
  imageUrl: string
} & React.ComponentProps<'div'>

const HeroUser = ({ imageUrl, children }: Props) => {
  return (
    <div className="w-full h-screen min-h-[700px]">
      <BackgroundUser imageUrl={imageUrl}>{children}</BackgroundUser>
    </div>
  )
}

export default HeroUser
