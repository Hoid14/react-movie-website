import { AddFavourites } from "./AddFavourites"

export const MovieList = ({movies}) => {
  return (
    <>
    {
        movies.map(movie =>(
            < div key={movie.imdbID} className='image-container w-[220px] inline-block p-2 cursor-pointer hover:scale-105 ease-in-out duration-300'>
                <img  src={movie.Poster} alt='movie'></img>
                <div className="overlay" >
                    <AddFavourites/>
                </div>
            </div>
            
            ))
    }
    </>
  )
}
