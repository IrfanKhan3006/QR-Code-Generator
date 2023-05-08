import React from 'react'
import VideosCard from "./VideosCard.jsx"
import "../Styles/Videos.css"

const Videos = ({Videos}) => {
  return (
    <div className='Videos'>
        {Videos.map((item,index)=>(
            <VideosCard index={index} key={item.image} image={item.image} name={item.name} />
        ))}
      
    </div>
  )
}

export default Videos
