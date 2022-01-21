import * as React from 'react'

// unit test isFilmOrCinema
const isFilmOrCinema = (movieId) => {
    return movieId.startsWith('cw') ? 'Cinema World' : 'Film World'
}

const MovieCard = ({moviesList}) => {
    return (
        <div className='movie' style={{ margin: '30px'}}>

            <img src={moviesList[0].Poster} alt={moviesList[0].Title} />
            <div className='overview'>
            <div className='movie-info'>
                <h5>{moviesList[0].Title}</h5>
            </div>
                <div>
                    {moviesList.map(movie => (
                        <div className='price-info'>
                            <h6>{isFilmOrCinema(movie.ID)}</h6>
                            <h6>{movie.Price}</h6>
                        </div>
                    ))}
                </div>
            </div>

       
        </div>

    )
}

export default MovieCard