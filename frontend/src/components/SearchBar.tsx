import { useState, type FC, type SyntheticEvent } from 'react'

interface SearchBarProps {
  userType: string
  searchIn: string
}
export const SearchBar: FC<SearchBarProps> = ({ userType, searchIn }: SearchBarProps) => {
  // TODO buscar en userType , la propiedad searchIn que contenga/sea igual a query

  const [query, setQuery] = useState('')

  const handleSubmit = (e: SyntheticEvent) => {
    e.preventDefault()
    console.log(`Submit Query: ${query}`)
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="relative w-[90%]"
    >
      <input
        onChange={(e) => {
          setQuery(e.currentTarget.value)
        }}
        className="w-full h-10 rounded-lg border border-black bg-white px-3 !outline-none"
      />
      <img
        src="./assets/icons/search.svg"
        alt="search"
        className="absolute w-min h-min top-2 right-2"
        onClick={handleSubmit}
      />
    </form>
  )
}
