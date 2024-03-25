export const MovieList = ({movies}) => {
  return (
    <>
    {
        movies.map(movie =>(
            <div key={movie.imdbID}>
                <img src={movie.Poster} alt='movie'></img>
            </div>
        ))
    }
    </>
  )
}
