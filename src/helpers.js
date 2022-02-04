export const sortingByPrice = (movies) => movies.sort((a, b) => a.Price - b.Price)

export const isFilmOrCinema = (movieId) => {
    return movieId.startsWith('cw') ? 'Cinema World' : 'Film World'
}

export const formatPrice = (moviePrice) => (typeof(moviePrice) === 'number'  ? '$'+ moviePrice.toFixed(2)   : undefined)


