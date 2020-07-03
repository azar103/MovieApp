import React from 'react'
import MovieCard from './MovieCard'
import './MovieList.css'

function MovieList ({movies, onAddMovie, count, inputValue}) {
  const filtredMovies = movies.filter((movie) => movie.rating >= count &&
  movie.name.toLowerCase().includes(inputValue.toLowerCase().trim()) 
  )

  console.log(count)

    return(
      <>
      <div className="movie_list_wrapper">

     {filtredMovies.map((movie) => <MovieCard 
      key={movie.id}
      url = {movie.url}
      name={movie.name}
      rating = {movie.rating}
    />)}

 <div className="new-movie-card"
      onClick={()=> onAddMovie()}
      >+</div>
      </div>
      
    
        
        
     
        </>
   
    )
}


export default MovieList