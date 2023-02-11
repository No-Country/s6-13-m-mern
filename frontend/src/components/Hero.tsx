import BackgroundImage from './BackgroundImage'

type Props = {
  imageUrl: string
} & React.ComponentProps<'div'>

const Hero = ({ imageUrl, children }: Props) => {
  return (
    <div className="w-full h-screen min-h-[800px]">
      <BackgroundImage imageUrl={imageUrl}>{children}</BackgroundImage>
    </div>
  )
}

export default Hero
