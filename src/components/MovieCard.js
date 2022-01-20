import * as React from 'react'
import { Card, Image, Text } from '@geist-ui/core'

// unit test isFilmOrCinema
const isFilmOrCinema = (movieId) => {
    return movieId.startsWith('cw') ? 'CinemaWorld' : 'FilmWorld'
}

const MovieCard = ({moviesList}) => {
    return (
        <Card shadow style={{ backgroundColor: 'lightblue', margin: '30px'}}>
              <Image src={moviesList[0].Poster} height="200px" width="400px" draggable={false} />
            <h1>{moviesList[0].Title}</h1>
            {moviesList.map(movie => (
                <h1>{isFilmOrCinema(movie.ID)}: {movie.Price}</h1>
            ))}
        </Card>
    )
}

export default MovieCard