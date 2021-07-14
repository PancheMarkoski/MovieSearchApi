import React,{useState} from 'react'
import "./default.scss"

// Components
import Homepage from './components/Homepage'
import MovieDetails from './components/MovieDetails'


function App() {
  const [movieID, setMovieID] = useState()

  return (
    <div className="App">
      {movieID ? <MovieDetails movieID={movieID} setMovieID={setMovieID} /> : <Homepage getMovieID={setMovieID}/> }
    </div>
  );
}

export default App;
