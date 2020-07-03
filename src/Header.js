import React, {useState} from 'react'
import './Header.css'
import Rating from './Rating'


function Header({ onChange, count, inputValue='', onChangeInput}) {
    return(
        <div className="header_container">
            <input type="text" placeholder="search a movie by name..."
              onChange={(event) =>onChangeInput(event.target.value)}
              value={inputValue}
            />
            <div className="stargroup">
            <p id="min_rating">Min Rating</p>    
            <Rating count={count}
             onChange={(ratingValue) => onChange(ratingValue)} />
           
           </div> 
        </div>
    )
}


export default Header;