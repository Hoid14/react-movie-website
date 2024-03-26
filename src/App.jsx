import { useEffect, useState } from "react"

import './App.css'
import {MdChevronLeft, MdChevronRight} from 'react-icons/md'
import { MovieList } from "./components/MovieList"
import axios from 'axios';
import { MovieListHeading } from "./components/MovieListHeading";
import { SearchBox } from "./components/SearchBox";

function App() {

  const [movies, setMovies] =useState([])
  const [searchValue, setSearchValue] =useState('star wars')

  //efecto de scroll
  const slideLeft = () =>{
    const slider =document.getElementById('slider')
    slider.scrollLeft = slider.scrollLeft - 500
  }

  const slideRight = () =>{
    const slider =document.getElementById('slider')
    slider.scrollLeft = slider.scrollLeft + 500
  }

  //obtener datos de api
  const api_key = import.meta.env.VITE_SOME_KEY

  
  
  
  useEffect( () =>{
      axios
      .get(
        `https://www.omdbapi.com/?s=${searchValue}&apikey=${api_key}`
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

  
  return (
    <>
      <div className="flex justify-between">
        <MovieListHeading/>
        <SearchBox searchValue={searchValue} setSearchValue={setSearchValue}/>
      </div>
      {movies.length>0 && (
        <div className="relative flex items-center">
              
          <MdChevronLeft className='opacity-50 cursor-pointer hover:opacity-100' onClick={slideLeft} size={40}/>

          <div id="slider" className="w-full h-full overflow-x-scroll scroll whitespace-nowrap scroll-smooth scrollbar-hide">
            <MovieList movies={movies}/>
          </div>
          
          <MdChevronRight className='opacity-50 cursor-pointer hover:opacity-100' onClick={slideRight} size={40}/>
        </div>
      )}
      
    </>
    
  )
}

export default App
