export const SearchBox = ({searchValue, setSearchValue}) => {
  return (
    <div className="flex items-center justify-center py-5">
        <input 
            className="w-full max-w-md px-2 py-1 border-2 border-gray-300 rounded"
            type="text" 
            placeholder="Escribe para buscar..."
            value={searchValue}
            onChange={event => setSearchValue(event.target.value)}
        
        />
    </div>
  )
}
