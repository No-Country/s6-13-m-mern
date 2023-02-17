type Props = React.ComponentProps<'div'>

const Container = ({ children }: Props) => {
  return (
    <div className="w-full h-full flex justify-center">
      <div className=" w-full h-full px-44 max-w-[1700px]">{children}</div>
    </div>
  )
}

export default Container
