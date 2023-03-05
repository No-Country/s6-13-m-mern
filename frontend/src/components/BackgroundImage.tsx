import type React from 'react'

type Props = {
  imageUrl: string
} & React.ComponentProps<'div'>

const BackgroundImage = ({ imageUrl, children }: Props) => {
  return (
    <div
      className="h-full w-full bg-slate-800"
      style={{
        background: `linear-gradient(rgba(247, 225, 225,.35), rgba(247, 225, 225,.35)), url("${imageUrl}")`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      {children}
    </div>
  )
}

export default BackgroundImage
