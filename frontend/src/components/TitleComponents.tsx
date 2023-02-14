import { type FC } from 'react'

interface TitleComponentsProps {
  title: string
}

export const TitleComponents: FC<TitleComponentsProps> = ({ title }: TitleComponentsProps) => {
  return <div className="w-full pl-11 py-11 text-blueDark font-bold text-xl">{title}</div>
}
