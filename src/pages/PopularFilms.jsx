import React, { useEffect, useState } from 'react'
import { fetchPopularFims } from '../API/FilmsApi'
import { Link, Route, Routes, useLocation } from 'react-router-dom'
import MoviesDetails from './MoviesDetails'

const PopularFilms = () => {
  const [movies, setMovies] = useState([])
  const location = useLocation()
  useEffect(() => {
    fetchPopularFims().then(setMovies);
  }, [])
  return (
    <>
    <ul>
      {movies.map(movie => (
        <li key={movie.id}>
          <Link to={{
            pathname:`/movies/${movie.id}`,
            state: {
              from: location,                                           
            }

          }}> 
          <p>{movie.title}</p>
          </Link>
        </li>
      ))}
    </ul>

    {/* <Routes>
      <Route path="/movies/:movieId" element={<MoviesDetails/>}></Route>
    </Routes> */}
    </>
    
  )
}

export default PopularFilms