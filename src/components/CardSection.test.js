import {render, screen} from '@testing-library/react'
import CardSection from './CardSection'

test('Renders card section', async () => {
    //Given
    const movies = [
       [
        {
            "ID": 'fw2488496',
            "Title": 'Star Wars: Episode VII - The Force Awakens',
            "Type": "movie",
            "Poster": "https://m.media-amazon.com/images/M/MV5BOTAzODEzNDAzMl5BMl5BanBnXkFtZTgwMDU1MTgzNzE@._V1_SX300.jpg",
            "Price": 25
        },
        {
            "ID": "cw2488496",
            "Title": "Star Wars: Episode VII - The Force Awakens",
            "Type": "movie",
            "Poster": "https://m.media-amazon.com/images/M/MV5BOTAzODEzNDAzMl5BMl5BanBnXkFtZTgwMDU1MTgzNzE@._V1_SX300.jpg",
            "Price": 24.7
        }
       ]
    ]

    //When
    render(<CardSection movies={movies} />)
  
    //Then
    expect(screen.getByText("Star Wars: Episode VII - The Force Awakens")).toBeVisible()
})