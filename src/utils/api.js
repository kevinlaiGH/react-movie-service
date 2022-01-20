import axios from 'axios'
import axiosRetry from 'axios-retry';

const getMovies = async () => {
    const options = {
        headers: {
            "x-api-key": 'Yr2636E6BTD3UCdleMkf7UEdqKnd9n361TQL9An7',
        }
    }

    axiosRetry(axios, { retries: Infinity });

    const [cinemaWorld, filmWorld] = await Promise.all(
        [axios.get('https://challenge.lexicondigital.com.au/api/v2/cinemaworld/movies', options),
        axios.get('https://challenge.lexicondigital.com.au/api/v2/filmworld/movies', options)]
    )

    return cinemaWorld.data?.Movies?.map((cinemaInfo , index) => {
        return [cinemaInfo, filmWorld.data?.Movies[index]];
    });

    }

export { getMovies }

