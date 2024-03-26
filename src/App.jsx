import { useEffect, useState } from "react"

import './App.css'
import {MdChevronLeft, MdChevronRight} from 'react-icons/md'
import { MovieList } from "./components/MovieList"
import { AddFavourites } from "./components/AddFavourites"
import { RemoveFavourites } from "./components/RemoveFavourites"
import axios from 'axios';
import { MovieListHeading } from "./components/MovieListHeading";
import { SearchBox } from "./components/SearchBox";

import { ToastContainer } from 'react-toastify';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function App() {

  const [movies, setMovies] =useState([])
  const [favourites, setFavourites] =useState([])
  const [searchValue, setSearchValue] =useState('')

  //efecto de scroll
  const slideLeft = (id) =>{
    const slider =document.getElementById(id)
    slider.scrollLeft = slider.scrollLeft - 500
  }

  const slideRight = (id) =>{
    const slider =document.getElementById(id)
    slider.scrollLeft = slider.scrollLeft + 500
  }

  //obtener datos de api
  const api_key = import.meta.env.VITE_SOME_KEY

  
  
  useEffect( () =>{
      axios
      .get(
        `https://www.omdbapi.com/?s=${searchValue}&apikey=6eb483b4`
      )
      .then(response =>{
        if(response.data.Search){
          setMovies(response.data.Search)
        }
        else{
          setMovies([])
        }
      })
    },[searchValue, api_key])

    // useEffect(()=>{
    //   const movieFavourites = JSON.parse(
    //     localStorage.getItem('react-movie-website'))
      
    //   setFavourites(movieFavourites) 
    // },[])

    //const saveToLocalStorage = (items) => {
    //  localStorage.setItem('react-movie-website', JSON.stringify(items))
    //}

    const addFavouriteMovie = (movie) =>{
      if (favourites && !favourites.some(favourite => favourite.imdbID === movie.imdbID)) {
        const newFavouriteList = [...favourites, movie];
        setFavourites(newFavouriteList);
        //saveToLocalStorage(newFavouriteList)
        toast.success("¡Película agregada a favoritos!");
      } else {
        toast.error("Esta película ya está en tus favoritos.");
      }
      
    }

    const removeFavouriteMovie = (movie) =>{
      const newFavouriteList = favourites.filter(
        (favourite)=> favourite.imdbID !== movie.imdbID)
        setFavourites(newFavouriteList)
        //saveToLocalStorage(newFavouriteList)
        toast.success("¡Película eliminada de favoritos!");
    }
  
  return (
    <>
      <div className="flex justify-between m-4 text-lg">
        <span className="font-bold"><MovieListHeading heading={"Peliculas"}/></span>
        <SearchBox searchValue={searchValue} setSearchValue={setSearchValue}/>
      </div>
      
        <div className="relative flex items-center">
              
          <MdChevronLeft className='opacity-50 cursor-pointer hover:opacity-100' onClick={()=>slideLeft("search-slider")} size={40}/>

          <div id="search-slider" className="w-full h-full overflow-x-scroll scroll whitespace-nowrap scroll-smooth scrollbar-hide">
            <MovieList movies={movies} handleFavouritesClick={addFavouriteMovie} favouriteComponent={AddFavourites}/>
          </div>
          
          <MdChevronRight className='opacity-50 cursor-pointer hover:opacity-100' onClick={()=>slideRight("search-slider")} size={40}/>
        </div>
         
  

      <div className="m-4 text-lg font-bold">
        <MovieListHeading heading={"Favoritas"}/>
      </div>
      <div className="relative flex items-center">
              
          <MdChevronLeft className='opacity-50 cursor-pointer hover:opacity-100' onClick={()=>slideLeft("favourites-slider")} size={40}/>

          <div id="favourites-slider" className="w-full h-full overflow-x-scroll scroll whitespace-nowrap scroll-smooth scrollbar-hide">
            <MovieList movies={favourites} handleFavouritesClick={removeFavouriteMovie} favouriteComponent={RemoveFavourites}/>
          </div>
          
          <MdChevronRight className='opacity-50 cursor-pointer hover:opacity-100' onClick={()=>slideRight("favourites-slider")} size={40}/>
        </div>
      
      

        <ToastContainer /> 
    </>
    
  )
}

export default App
