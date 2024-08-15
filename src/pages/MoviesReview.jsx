import React, { useEffect, useState } from 'react'
import { fetchMoviesReviews } from '../API/FilmsApi'
import { useParams } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';


const MoviesReview = () => {
    const {reviewsId} = useParams();
    const [reviews, setReviews] = useState([])
    console.log(reviewsId);

    useEffect(() => {
        fetchMoviesReviews(reviewsId).then(setReviews)
      }, [reviewsId])
      console.log(reviews);
  
  return (
    <ul>
        {reviews.length > 0 ? reviews.map((review) => {
            return <li key={review.id}>
                <p>{review.author}</p>
                <p>{review.content}</p>
            </li>
        }) : <p>Коментарів немає</p>}
  </ul>
  
  )
}

export default MoviesReview