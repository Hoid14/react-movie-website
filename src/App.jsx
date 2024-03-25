import { useEffect, useState } from "react"

import './App.css'
import {MdChevronLeft, MdChevronRight} from 'react-icons/md'
import { MovieList } from "./components/MovieList"
import axios from 'axios';

function App() {

  const [movies, setMovies] =useState([])
  const [searchValue, setSearchValue] =useState('')
  
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
        `https://www.omdbapi.com/?s=star&apikey=${api_key}`
      )
      .then(response =>{
        setMovies(response.data.Search);
      })
    },[api_key])

  
  return (
    <>
      <div className="relative flex items-center">
        <MdChevronLeft className='opacity-50 cursor-pointer hover:opacity-100' onClick={slideLeft} size={40}/>

        <div id="slider" className="w-full h-full overflow-x-scroll scroll whitespace-nowrap scroll-smooth scrollbar-hide">
          <MovieList movies={movies}/>
        </div>
        
        <MdChevronRight className='opacity-50 cursor-pointer hover:opacity-100' onClick={slideRight} size={40}/>
      </div>
    </>
    
  )
}

export default App
