import * as React from 'react'
import MovieCard from './MovieCard'
import { Grid } from '@geist-ui/core'
// unit test tpo ensure its working
const sortingByPrice = (movies) => movies.sort((a, b) => a.Price - b.Price)


const CardSection = ({movies}) => {
    return (
        <Grid.Container gap={2}>
            {movies?.map((movie, index) => (
                <MovieCard moviesList={sortingByPrice(movie)} key={index} />
            ))}
        </Grid.Container>
    )
}

export default CardSection