import * as React from 'react'
import MovieCard from './MovieCard'
import { sortingByPrice } from '../helpers'

const CardSection = ({movies}) => {
    return (
        <div className='movie-container'>
            {movies?.map((movie, index) => (
                <MovieCard
                    moviesList={sortingByPrice(movie)} 
                    key={index} 
                />
            ))}
        </div>
    )
}

export default CardSection