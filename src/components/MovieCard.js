import * as React from 'react'
import {isFilmOrCinema , formatPrice} from '../helpers'

const MovieCard = ({moviesList}) => {
    return (
        <div className='movie' style={{ margin: '30px'}} >
            <img src={moviesList[0].Poster} alt={moviesList[0].Title} />
            <div className='overview'>
            <div className='movie-info'>
                <h5>{moviesList[0].Title}</h5>
            </div>
                <div>
                {moviesList.map((movie, index) => (
                    <div className='price-info' key={index} style={{color: index === 0 && '#ff7400'}}>
                        <h6 >{isFilmOrCinema(movie.ID)}</h6>
                        <h6>{formatPrice(movie.Price)}</h6>
                    </div>
                ))}
                </div>
            </div>

       
        </div>

    )
}


export default MovieCard