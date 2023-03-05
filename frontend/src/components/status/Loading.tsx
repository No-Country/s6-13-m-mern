interface Props {
  message: string
}

const Loading = ({ message }: Props) => {
  return (
    <div className="flex justify-center h-full items-center">
      <div
        className="w-full h-full flex
                    justify-center items-center"
      >
        <div
          className="animate-fadeInRight flex
                 flex-col items-center gap-y-3"
        >
          <span
            className="w-[108px] h-[108px] border-[10px]
                         border-dotted border-blueDark
                         rounded-full inline-block relative
                         box-border animate-rotation"
          ></span>
          <div className="font-bold text-blueDark text-center">
            <p>{message}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Loading
