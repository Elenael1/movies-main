import React from 'react'
import MoviesItem from '../moviesItem/MoviesItem'

const MoviesList = ({data}) => {
    console.log(data)
  return (
    <ul>
        {data.map(({id, title, video, poster_path, overview}) => {
            return (
            <MoviesItem key={id} title={title} video={video} poster_path={poster_path} overview={overview}/>
            )
        })}
    </ul>
  )
}

export default MoviesList



