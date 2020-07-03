import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './Header';
import MovieList from './MovieList';


function App() {
  const [movies, setMovies] = useState([])
  const [ratingValue, setRatingValue] = useState(1)
  const [inputValue, setInputValue] = useState('')
  function searchByName(name) {
  const newMovies = movies.filter((movie) => movie.name.toLowerCase().indexOf(name.toLowerCase()) !== -1 )
   setMovies(newMovies)
  }


 
  function onChangeRatingValue(value)  {
    setRatingValue(value)
  }

  function onChangeInputValue(value) {
    setInputValue(value)
  }

  function onAddMovie(){
    const newMovie = {
          id: Math.random(),
          url: prompt('entrez une url'),
          name: prompt('entrez un titre'),
          rating: Number(prompt('entrez un rating'))
    }
    setMovies([...movies, newMovie])
  } 


  return (
    <div className="movie_container">
      <Header
       searchByName= {searchByName}
       count = {ratingValue}
       onChange= {onChangeRatingValue}
       inputValue={inputValue}
       onChangeInput = {(value) =>onChangeInputValue(value)}
      />
      <MovieList 
         movies={movies}  
         onAddMovie = {onAddMovie}
         count = {ratingValue}
         inputValue={inputValue}
      />
    </div>
  );
}

export default App;
