import React from 'react'
import "../Styles/VideosCard.css"

const PlayButton = <svg xmlns='http://www.w3.org/2000/svg' height="24px" viewBox='0 0 24 24 ' width="24px"
fill='#ffffff'><path d="M0 0h 24v24H0z" fill='none'/><path d="M8 5v14l11-7z"/></svg>

const VideosCard = ({image,name,index}) => {
  return (
    <div className='VideosCard' style={{backgroundImage:`url(${image})`}}>
        <a href="#/">{PlayButton}</a>
        <p>{name}</p>
    </div>
  )
}

export default VideosCard
