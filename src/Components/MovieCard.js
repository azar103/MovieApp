import React from 'react'
import  './MovieCard.css'
import plus from '../plus.png'
import Rating from './Rating';
function MovieCard({url={plus}, name, rating}) {
   
    return(  
         url === null || name ===null || rating === 0 ? 
            null
           :
           <div className="movie_wrapper">
           <div className="img_movie">
              <img src={url} className="myImg"/>
           </div>
           <div className="stars"><Rating count={rating}/> </div>
           <div  className="title_movie">
              {name}
           </div>
       </div>
    )
    
    
}



export default MovieCard