interface Props {
  title: string
  children: string
  index: string
  activeIndex: string
  setActiveIndex: React.Dispatch<React.SetStateAction<string>>
}

const Accordion = ({ title, children, index, activeIndex, setActiveIndex }: Props) => {
  const handleSetIndex = (index: string) => {
    if (activeIndex !== index) setActiveIndex(index)
    if (activeIndex === index) setActiveIndex('')
  }

  return (
    <>
      <div
        onClick={() => {
          handleSetIndex(index)
        }}
        className={`flex justify-between px-6 mt-6 text-lg w-full h-[61px] bg-white border-black border ${
          activeIndex === index ? 'rounded-t-lg border-b-transparent -mb-5' : 'rounded-lg'
        }`}
      >
        <div className="flex">
          <div className="text-black font-bold leading-[60px]">{title}</div>
        </div>
        <div className="flex items-center justify-center">
          {activeIndex === index ? (
            <img
              src="/assets/icons/Up.svg"
              className="w-8 h-8"
            />
          ) : (
            <img
              src="/assets/icons/Down.svg"
              className="w-8 h-8"
            />
          )}
        </div>
      </div>

      {activeIndex === index && (
        <div className=" bg-white border border-black border-t-transparent rounded-b-lg p-4 mb-6 text-sm">
          <hr className=" mb-2 border-black opacity-40" />
          {children}
        </div>
      )}
    </>
  )
}

export default Accordion
