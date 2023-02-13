import type React from 'react'

type Props = {
  imageUrl: string
} & React.ComponentProps<'div'>

const BackgroundUser = ({ imageUrl, children }: Props) => {
  // return <div className={`h-full w-full bg-[url('${imageUrl}')] bg-center bg-cover`}>{children}</div>

  return (
    <>
      {imageUrl === 'info' && (
        <div className="h-full w-full bg-[url('/assets/background/Information.jpg')] bg-center bg-cover">
          {children}
        </div>
      )}
      {imageUrl === 'doc' && (
        <div className="h-full w-full bg-[url('/assets/background/Documents.jpg')] bg-center bg-cover">
          {children}
        </div>
      )}
      {imageUrl === 'amen' && (
        <div className="h-full w-full bg-[url('')] bg-center bg-cover">
          {children}
        </div>
      )}
      {imageUrl === 'pay' && (
        <div className="h-full w-full bg-[url('/assets/background/Payments.jpg')] bg-center bg-cover">
          {children}
        </div>
      )}
      {imageUrl === 'order' && (
        <div className="h-full w-full bg-[url('')] bg-center bg-cover">
          {children}
        </div>
      )}
      {imageUrl === 'vot' && (
        <div className="h-full w-full bg-[url('')] bg-center bg-cover">
          {children}
        </div>
      )}
    </>
  )
}

export default BackgroundUser
