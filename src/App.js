import React, { useState, useEffect } from 'react';
import { getMovies } from "./utils/api";
import './App.css';
import CardSection from './components/CardSection'

function App() {
  const [movies, setMovies] = useState([])
  const [error, setError] = useState(null)

  useEffect(() => {
      const getMoviesList = async () => {
        const movies = await getMovies()

        setMovies(movies)
      }
        getMoviesList().catch( error => setError(error))
      }, [])

  const errorMessage = `hey something is wrong, try refreshing`
  if (error){
    return (
      <h1 style={{textAlign: 'center'}}>{errorMessage}</h1>
    )
  }    

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