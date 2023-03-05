import { useState } from 'react'
import { OptionValues } from '../interfaces/optionInterfaces'
import Select from './Select'

interface Props {
  allOptions: OptionValues[]
  selectedOptions: OptionValues[]
  setSelectedOptions: React.Dispatch<React.SetStateAction<OptionValues[]>>
}

const Controller = ({ allOptions, selectedOptions, setSelectedOptions }: Props) => {
  const [showSelect, setShowSelect] = useState(false)

  const removeItem = (option: OptionValues) => {
    const optionsModified = selectedOptions.filter((item) => item.value !== option.value)
    setSelectedOptions(optionsModified)
  }

  const removeAll = () => {
    setSelectedOptions([])
  }

  return (
    <div className="relative w-full">
      <div
        className="w-full min-h-[40px] border-[1px]
                     border-blueDark flex flex-row
                     items-center justify-center rounded-lg"
      >
        {selectedOptions.length === 0 && <span className="max-w-[60px] italic text-greyLight px-2">Amenities</span>}
        <ul
          className="h-full w-full flex flex-wrap
                         px-2 py-[3px] gap-[4px]"
        >
          {selectedOptions.length !== 0 &&
            selectedOptions.map((item) => (
              <li
                key={item.id}
                className="border-[1px] bg-[#e6e6e6]
                            py-[2px] px-2 flex gap-x-2 rounded"
              >
                <span className="text-[14px]">{item.value}</span>
                <img
                  onClick={() => {
                    removeItem(item)
                  }}
                  className="w-[10px] cursor-pointer"
                  src="../../assets/icons/cross2.svg"
                />
              </li>
            ))}
        </ul>
        <div className="flex flex-row h-[37px]">
          {selectedOptions.length > 0 && (
            <div
              onClick={removeAll}
              className="mt-2 mr-1 ml-2 cursor-pointer"
            >
              <img
                src={'../../assets/icons/cross2.svg'}
                className="w-[20px] h-[20px]"
              />
            </div>
          )}
          {showSelect && (
            <div
              onClick={() => {
                setShowSelect(false)
              }}
              className="border-l-[1px] border-greyLight
                         ml-2 mr-1 pl-1 cursor-pointer"
            >
              <img
                src="../../assets/icons/arrow-down.svg"
                className="w-[37px] h-[37px] rotate-[180deg]"
              />
            </div>
          )}
          {!showSelect && (
            <div
              onClick={() => {
                setShowSelect(true)
              }}
              className="border-l-[1px] border-greyLight
                         ml-2 mr-1 pl-1 cursor-pointer"
            >
              <img
                src="../../assets/icons/arrow-down.svg"
                className="w-[37px] h-[37px]"
              />
            </div>
          )}
        </div>
      </div>
      {showSelect && selectedOptions.length !== allOptions.length && (
        <Select
          allOptions={allOptions}
          selectedOptions={selectedOptions}
          setSelectedOptions={setSelectedOptions}
        />
      )}
    </div>
  )
}

export default Controller
