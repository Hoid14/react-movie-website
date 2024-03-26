
export const MovieList = ({movies,favouriteComponent,handleFavouritesClick}) => {
  const  FavouriteComponent =favouriteComponent
  

  return (
    <>
    { 
      movies.map(movie =>(
        < div key={movie.imdbID} className='image-container w-[220px] inline-block m-2 cursor-pointer hover:scale-105 ease-in-out duration-300'>
            <img  src={movie.Poster} alt='movie'></img>
            <div onClick={()=>handleFavouritesClick(movie)} className="overlay" >
                <FavouriteComponent/>
            </div>
          </div>
        
        ))
    
        
    }
    </>
  )
}
