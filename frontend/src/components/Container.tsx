type Props = React.ComponentProps<'div'>

const Container = ({ children }: Props) => {
  return (
    <div className="w-full h-full flex justify-center">
      <div className=" w-full h-full md:px-44 px-7 sm:px-20 max-w-[1700px]">{children}</div>
    </div>
  )
}

export default Container
