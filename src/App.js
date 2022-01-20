import React, { useState, useEffect } from 'react';
import { getMovies } from "./utils/api";
import './App.css';
// import MovieCard from './components/MovieCard'
import CardSection from './components/CardSection'

function App() {

  const [movies, setMovies] = useState([])

  useEffect(() => {
      const getMoviesList = async () => {
        const movies = await getMovies()

        setMovies(movies)
      }
        getMoviesList()
      }, [])

  return (
    <>
     <CardSection movies={movies}/>
    </>
  );
}

export default App;