import React from 'react'

const MoviesItem = ({id, title, video, poster_path, overview}) => {
  return (
    <li id={id}>
        <p>{title}</p>
        <p>{overview}</p>
        <img src={`https://image.tmdb.org/t/p/w400${poster_path}`}/>
        {video && <video src={video} controls></video>}
    </li>
  )
};

export default MoviesItem