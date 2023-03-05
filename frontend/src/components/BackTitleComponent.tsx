import { useNavigate } from 'react-router-dom'

interface Props {
  title: string
  navigateTo: string
}

const BackTitleComponent = ({ title, navigateTo }: Props) => {
  const navigate = useNavigate()
  return (
    <div className="flex gap-x-6 text-blueDark font-bold text-xl items-center">
      <button
        className=""
        onClick={() => {
          navigate(navigateTo)
        }}
      >
        <div className="fex flex-col w-[11.25px] h-[22.5px]">
          <img src={'../../assets/icons/left-arrow.svg'} />
        </div>
      </button>
      <h3>{title}</h3>
    </div>
  )
}

export default BackTitleComponent
