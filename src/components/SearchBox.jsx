export const SearchBox = ({searchValue, setSearchValue}) => {
  return (
    <div className="flex items-center justify-center py-5">
    <input 
        className="w-full max-w-md px-4 py-2 leading-tight text-black transition duration-150 ease-in-out border-2 border-gray-300 rounded-lg focus:outline-none focus:bg-white focus:border-indigo-500"
            type="text" 
            placeholder="Escribe para buscar..."
            value={searchValue}
            onChange={event => setSearchValue(event.target.value)}
        
        />
    </div>
  )
}
