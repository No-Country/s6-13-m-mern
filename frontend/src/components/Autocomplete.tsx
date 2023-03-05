import useSelect from '../hooks/useSelect'
import { UserProfile } from '../interfaces/userInterfaces'

interface AutocompleteProps {
  options: UserProfile[]
  setSelectedOption: (value: UserProfile) => void
  loading: boolean
  endSearch: (value: boolean) => void
  onInputChange: (e: any) => void
  value: string
  name: string
}

export default function Autocomplete ({
  options,
  setSelectedOption,
  loading,
  endSearch,
  onInputChange,
  value,
  name,
}: AutocompleteProps) {
  const { select, handleChange, handleNav, ref, cursor, showOptions } = useSelect(setSelectedOption, endSearch, options)

  return (
    <div
      className=""
      ref={ref}
    >
      <div className="flex">
        <input
          type="text"
          autoComplete="off"
          name={`${name}`}
          value={value}
          className="border border-black p-1 rounded-lg w-full h-10 md:h-12  placeholder:italic placeholder:text-grey px-5"
          placeholder="Search members by name or email"
          onChange={(e) => {
            handleChange(e.target.value)
            onInputChange(e)
          }}
          onKeyDown={handleNav}
        />
        <i className="fa-solid fa-magnifying-glass -ml-8 text-xl text-grey my-auto"></i>
      </div>
      <ul className={`absolute w-auto rounded-lg shadow-lg bg-white ${!showOptions ? 'hidden' : ''} select-none`}>
        {options?.length > 0
          ? options.map((option, i) => {
            return (
                <li
                  className={` p-2 hover:bg-gray-100 ${cursor === i ? ' bg-gray-100' : ''}`}
                  key={option._id}
                  onClick={() => {
                    select(option)
                  }}
                >
                  <div className="flex mx-3 gap-x-2">
                    <i className="fa-solid fa-user text-lg"></i>
                    <p>
                      Name: {option.name} {option.lastname}
                    </p>
                  </div>

                  <div className="flex mx-3 gap-x-2">
                    <i className="fa-solid fa-envelope text-lg"></i>
                    <p className="whitespace-nowrap text-ellipsis overflow-hidden">Email: {option.email}</p>
                  </div>
                </li>
            )
          })
          : loading && <li className="px-4 py-2 text-gray-500">Searching...</li>}
        {!loading && options?.length < 1 && <li className="px-4 py-2 text-gray-500">No results</li>}
      </ul>
    </div>
  )
}
