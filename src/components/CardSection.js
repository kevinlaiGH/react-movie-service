import * as React from 'react'
import MovieCard from './MovieCard'

// unit test tpo ensure its working
const sortingByPrice = (movies) => movies.sort((a, b) => a.Price - b.Price)

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