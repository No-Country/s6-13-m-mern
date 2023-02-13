type Props = React.ComponentProps<'div'>

const Container = ({ children }: Props) => {
  return <div className=" w-full h-full px-44">{children}</div>
}

export default Container
