import React, { useEffect } from 'react'
import { fetchDetailsById, fetchMoviesReviews } from '../API/FilmsApi'
import { useState } from 'react'
import { Link, useLocation, useNavigate, useParams } from 'react-router-dom'

const MoviesDetails = () => {
    const navigate = useNavigate()
    const {movieId} = useParams();
    const [movieInfo, setMovieInfo] = useState([])
    // const [reviews, setReviews] = useState([])
    

    const location = useLocation()


    // useEffect(() => {
    //   fetchMoviesReviews(movieId).then(setReviews)
    // }, [movieId])


    useEffect(() => {
      fetchDetailsById(movieId).then(setMovieInfo)
    }, [movieId])
    const handleClick = () => {
      navigate("/")
    }
    // console.log(reviews)
  return (
    <>
    <button onClick={() => {handleClick()}}>Homepage</button>
    <button>Go back</button>
    {movieInfo && <div>
        <img src={`https://image.tmdb.org/t/p/w400${movieInfo.poster_path}`} />
        <h1>{movieInfo.title}</h1>
        <p>
          <Link to={{
            pathname:`/actors/${movieInfo.id}`,
            state: {
              from: location,
            }
          }}>Actors</Link>
        </p>
        <h2>Genres:</h2>
        <p>{movieInfo.genres && movieInfo.genres.map(({ name }) => name).join(' ')}</p>
        <p>{movieInfo.overview}</p>
        <p>
          <Link to={{
             pathname:`/reviews/${movieInfo.id}`,
             state: {
               from: location,                                           
             }
          }}>Reviews</Link>
        </p>
        

    </div>}
    
    {/* <img src={`https://image.tmdb.org/t/p/w400${poster_path}`}/> */}
    </>
    
  )
}

export default MoviesDetails