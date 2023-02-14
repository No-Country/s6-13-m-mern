import type React from 'react'

type Props = {
  imageUrl: string
} & React.ComponentProps<'div'>

const BackgroundUser = ({ imageUrl, children }: Props) => {
  // return <div className={`h-full w-full bg-[url('${imageUrl}')] bg-center bg-cover`}>{children}</div>

  return (
    <>
      {imageUrl === 'info' && (
        <div className="h-full w-full bg-[url('https://res.cloudinary.com/dozwd1ssj/image/upload/v1676310336/Information_ksw8ov.jpg')] bg-center bg-cover">
          {children}
        </div>
      )}
      {imageUrl === 'doc' && (
        <div className="h-full w-full bg-[url('https://res.cloudinary.com/dozwd1ssj/image/upload/v1676310337/Documents_c1jxqm.jpg')] bg-center bg-cover">
          {children}
        </div>
      )}
      {imageUrl === 'amen' && (
        <div className="h-full w-full bg-[url('https://res.cloudinary.com/dozwd1ssj/image/upload/v1676311290/Amenities_etugxw.jpg')] bg-center bg-cover">
          {children}
        </div>
      )}
      {imageUrl === 'pay' && (
        <div className="h-full w-full bg-[url('https://res.cloudinary.com/dozwd1ssj/image/upload/v1676310336/Payments_cpbq9l.jpg')] bg-center bg-cover">
          {children}
        </div>
      )}
      {imageUrl === 'order' && (
        <div className="h-full w-full bg-[url('https://res.cloudinary.com/dozwd1ssj/image/upload/v1676311441/Orders_glele8.jpg')] bg-center bg-cover">
          {children}
        </div>
      )}
      {imageUrl === 'vot' && (
        <div className="h-full w-full bg-[url('https://res.cloudinary.com/dozwd1ssj/image/upload/v1676310337/Documents_c1jxqm.jpg')] bg-center bg-cover">
          {children}
        </div>
      )}
    </>
  )
}

export default BackgroundUser
