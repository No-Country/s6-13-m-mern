interface Props {
  message: string
}

const Error = ({ message }: Props) => {
  const renderMessage = () => {
    const lines = message.split('<br />')
    return (
      <div className="font-bold text-blueDark text-center">
        {lines.map((line, index) => (
          <p key={`line-${index}`}>{line}</p>
        ))}
      </div>
    )
  }

  return (
    <div className="flex justify-center items-center">
      <div
        className="w-full h-full flex
                      justify-center items-center"
      >
        <div
          className="animate-fadeInRight flex
                   flex-col items-center gap-y-3"
        >
          <img
            className="w-[108px] h-[108px]"
            src="https://res.cloudinary.com/dozwd1ssj/image/upload/v1677383270/cancelar_vw30xs.png"
          />
          {renderMessage()}
        </div>
      </div>
    </div>
  )
}

export default Error
