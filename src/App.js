import React, { useState, useEffect } from 'react';
import { getMovies } from "./utils/api";
import './App.css';
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
        <div className="post">
          <h1>
            Prince's Theatre
          </h1>
        </div>
        <CardSection movies={movies}/>
      </>
  );
}

export default App;