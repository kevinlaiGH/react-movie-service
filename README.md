# react-movie-service
This documentation will take a deep dive of my technical choices for building a single page application.
### Technologies used:
- React for frontend UI design
- axios-retry 
- React testing-library for testing
- Postman to test API
## How to run
### Netlify
This web app is deployed to Netlify: https://react-movie-service.netlify.app/

In the project directory, you can run:

### `npm install`
### `npm start`

Runs the app in the development mode.
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.
### `npm test`
Runs unit tests for Card Section
## Implementation:
- Create-react-app is used because it produces a static build of the application. If there are additional requirements of the user case, it is better to use Webpack and Babel to customize the build configurations.
- Instead of using class components, React hooks allow could help improving code reuse and composition.
- Code splitting of React components is the key for separation of concerns. In this case, we have non-visual logic of API calls and the UI components, these need to be separated, so that it makes the code and tests more reusable and maintainable.
- Utilizing a jagged array of JSON objects as data structure for API calls, it is very convenient to access an element by using index number

```
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
```    

- For error handling, the axios-retry library is used for intercepting failed requests and retrying them numerous times. In case of axios-retry not working, the error on the server side will be caught after API calls occur and be displayed in the webpage, but this might not be the best approach from the perspectives of the user.
- For unit testing, <CardSection /> component is tested for mocking the API, ensuring this component works as expected.

# Trade offs
- I could have used Typescript, as it is static typing, making it easier to catch errors earlier before they hit runtime. 
- While mocking API is good when starting from scratch, they do require constant maintaenance to stay up to date with any new functionalities added
