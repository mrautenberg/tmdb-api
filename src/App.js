//import React from 'react';
import { useState, useEffect } from 'react';
import { API_URL, NOW_PLAYING, TOP_RATED, API_KEY, SETTINGS } from './data';
import { createGlobalStyle } from 'styled-components';
import MovieList from './components/movies/MovieList';

const GlobalStyle = createGlobalStyle`
* {
  margin: 0;
  padding: 0;
}
`;

function App() {
  const [movies, setMovies] = useState([]);
  const [display, setDisplay] = useState(NOW_PLAYING);

  useEffect(() => {
    // console.log('hej från useEffect');
    fetch(API_URL + display + API_KEY + SETTINGS)
      .then(res => res.json())
      .then(data => setMovies(data.results));
    // lägg till display, varje tillfälle knapptryck körs laddas det om
    // i och med att display får nytt state genom setDisplay
  }, [display]);

  return (
    <>
      <GlobalStyle />
      <div>
        <h1>Movie Database</h1>

        <label htmlFor='search'>Search: </label>
        <input id='search' type='text' />
        <br />
        <br />
        <hr />
        <button onClick={() => setDisplay(NOW_PLAYING)}>NOW PLAYING</button>
        <button onClick={() => setDisplay(TOP_RATED)}>TOP RATED</button>
        <br />
        <br />
        <MovieList
          data={movies}
          headerText={display === NOW_PLAYING ? 'Now playing' : 'Top Rated'}
        />
      </div>
    </>
  );
}

export default App;
