import * as React from 'react'
import { Card, Image, Grid , Text} from '@geist-ui/core'

// unit test isFilmOrCinema
const isFilmOrCinema = (movieId) => {
    return movieId.startsWith('cw') ? 'CinemaWorld' : 'FilmWorld'
}

const MovieCard = ({moviesList}) => {
    return (
        <Grid xs={6} style={{ margin: '30px'}}>
            <Card shadow style={{ backgroundColor: 'lightblue', margin: '30px'}}>
            <Image src={moviesList[0].Poster} height="200px" width="400px" draggable={false} />
            <Text h3>{moviesList[0].Title}</Text>
            {moviesList.map(movie => (
                <Text h4>{isFilmOrCinema(movie.ID)}: {movie.Price}</Text>
            ))}
        </Card>
        </Grid>

    )
}

export default MovieCard