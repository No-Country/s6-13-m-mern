import type React from 'react'

type Props = {
  imageUrl: string
} & React.ComponentProps<'div'>

const BackgroundUser = ({ imageUrl, children }: Props) => {
  return <div className={`h-full w-full bg-[url("${imageUrl}")] bg-center bg-cover`}>{children}</div>
}

export default BackgroundUser
