import { OptionValues } from '../interfaces/optionInterfaces'

interface Props {
  allOptions: OptionValues[]
  selectedOptions: OptionValues[]
  setSelectedOptions: React.Dispatch<React.SetStateAction<OptionValues[]>>
}

const Select = ({ allOptions, selectedOptions, setSelectedOptions }: Props) => {
  const addOption = (option: OptionValues) => {
    const optionsModified = [...selectedOptions, option]
    setSelectedOptions(optionsModified)
  }

  return (
    <ul
      className="absolute w-full border-[1px]
                     bg-white mt-2 rounded border-greyLight
                     max-h-[200px] overflow-y-scroll"
    >
      {allOptions
        .filter((item) => !selectedOptions.some((selectedItem) => selectedItem.value === item.value))
        .map((item) => (
          <li
            key={item.id}
            onClick={() => {
              addOption(item)
            }}
            className="h-[40px] my-[1px] hover:bg-[#deebeb]
                         flex items-center cursor-default"
          >
            {item.value}
          </li>
        ))}
    </ul>
  )
}

export default Select
