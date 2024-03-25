export const MovieList = ({movies}) => {
  return (
    <>
    {
        movies.map(movie =>(
            <img className='w-[220px] inline-block p-2 cursor-pointer hover:scale-105 ease-in-out duration-300' key={movie.imdbID} src={movie.Poster} alt='movie'></img>
        ))
    }
    </>
  )
}
