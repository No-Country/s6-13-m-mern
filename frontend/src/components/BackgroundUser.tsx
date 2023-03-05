import type React from 'react'

type Props = {
  imageUrl: string
} & React.ComponentProps<'div'>

const BackgroundUser = ({ imageUrl, children }: Props) => {
  // return <div className={`h-full w-full bg-[url('${imageUrl}')] bg-center bg-cover`}>{children}</div>

  return (
    <>
      {imageUrl === 'info' && <div className="h-full w-full bg-[#e3e3e3] bg-center bg-cover">{children}</div>}
      {imageUrl === 'doc' && <div className="h-full w-full bg-[#e3e3e3] bg-center bg-cover">{children}</div>}
      {imageUrl === 'amen' && <div className="h-full w-full bg-[#e3e3e3] bg-center bg-cover">{children}</div>}
      {imageUrl === 'pay' && <div className="h-full w-full bg-[#e3e3e3] bg-center bg-cover">{children}</div>}
      {imageUrl === 'order' && <div className="h-full w-full bg-[#e3e3e3] bg-center bg-cover">{children}</div>}
      {imageUrl === 'vot' && <div className="h-full w-full bg-[#e3e3e3] bg-center bg-cover">{children}</div>}
    </>
  )
}

export default BackgroundUser
