import { sortingByPrice, formatPrice} from "./helpers";

describe('helper functions', () => {
    describe('sortingByPrice()', () => {
        test('sorts the price from cheapest to expensive', () => {
            //Given
            const moviesInput = [
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

            const moviesExpectation = [
                    {
                        "ID": "cw2488496",
                        "Title": "Star Wars: Episode VII - The Force Awakens",
                        "Type": "movie",
                        "Poster": "https://m.media-amazon.com/images/M/MV5BOTAzODEzNDAzMl5BMl5BanBnXkFtZTgwMDU1MTgzNzE@._V1_SX300.jpg",
                        "Price": 24.7
                    },
                
                    {
                        "ID": 'fw2488496',
                        "Title": 'Star Wars: Episode VII - The Force Awakens',
                        "Type": "movie",
                        "Poster": "https://m.media-amazon.com/images/M/MV5BOTAzODEzNDAzMl5BMl5BanBnXkFtZTgwMDU1MTgzNzE@._V1_SX300.jpg",
                        "Price": 25
                    }
                
            ]

            // Expect
            expect(sortingByPrice(moviesInput)).toEqual(moviesExpectation)
            
        })

    })
    describe('formatPrice', () => {
        test('it should format the price with 2 decimal places', () => {
            // Iput
            const moviePriceInput = 34.556

            // Expectation
            const moviePriceExpectation = '$34.56'

            // Assertion
            expect(formatPrice(moviePriceInput)).toEqual(moviePriceExpectation)

        })
        test('it shouldnt format the price with 2 decimal places', () => {
            // Iput
            const moviePriceInput = 'hello'

            // Expectation
            const moviePriceExpectation = undefined

            // Assertion
            expect(formatPrice(moviePriceInput)).toEqual(moviePriceExpectation)

        })
        test('???', () => {
            // Iput
            const moviePriceInput = '25.446'

            // Expectation
            const moviePriceExpectation = undefined

            // Assertion
            expect(formatPrice(moviePriceInput)).toEqual(moviePriceExpectation)

        })
    })
})

