# react-movie-service

### Technologies used:
- React for frontend UI design
- axios-retry 
- React testing-library for testing
- Postman to test API
## Available Scripts

In the project directory, you can run:

### `npm install`
### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.
### `npm test`
Runs unit tests for Card Section
## Implementation:
- Code splitting of React Components is the key for separation of concerns, breaking down into smaller components also makes code and the relevant tests more reusable and maintainable
- Utilizing a jagged array of JSON objects data structure from API calls, it is very convenient to access an element by using index number
- I used the axios-retry library for intercepting failed requests and retrying them numerous times

# Trade offs
- I could have used Typescript, as it is static typing, making it easier to catch errors earlier
