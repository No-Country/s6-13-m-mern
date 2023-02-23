import { type FC } from 'react'
import { Link } from 'react-router-dom'

interface TitleComponentsProps {
  title: string
  path: string
}

export const TitleComponents: FC<TitleComponentsProps> = ({ title, path }: TitleComponentsProps) => {
  return (
    <div className="flex gap-6 pl-11 pt-11 pb-8 text-blueDark font-bold text-xl">
      <Link to={`/${path}`}>
        <img
          src="../assets/arrow.png"
          alt="arrow"
        />
      </Link>
      {title}
    </div>
  )
}
