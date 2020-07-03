import React from 'react'
import './Rating.css'
function Rating({count, onChange = () => {}}) {
    let starsHtml = [];
    for(let i=0;i<5;i++) {
        if(i<count){
            starsHtml.push(<span key={i}
            onClick={() => onChange(i+1)}
            >★</span>)
        } else {
            starsHtml.push(<span key={i}
                onClick={() => onChange(i+1)}
            >☆</span>)
        }
    }
    return(
      <div>{starsHtml}</div> 
    )
}



export default Rating