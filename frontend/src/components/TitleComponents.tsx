import { type FC } from 'react'

interface TitleComponentsProps {
  title: string
}

export const TitleComponents: FC<TitleComponentsProps> = ({ title }: TitleComponentsProps) => {
  return <div className="w-full pl-11 pt-11 pb-8 text-blueDark font-bold text-xl">{title}</div>
}
