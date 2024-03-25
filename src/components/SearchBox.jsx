export const SearchBox = ({searchValue, setSearchValue}) => {
  return (
    <div>
        <input className="text-black"
            type="text" 
            placeholder="Escribe para buscar..."
            value={searchValue}
            onChange={event => setSearchValue(event.target.value)}
        
        />
    </div>
  )
}
