import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { fetchActors } from '../API/FilmsApi';

const Actors = () => {
    const {actorsId} = useParams();
    const [actors, setActors] = useState([])
    console.log(actorsId);

      useEffect(() => {
        fetchActors(actorsId).then(setActors)
      }, [actorsId])
      console.log(actors)

  return (
    <ul>
        {actors.map(actor => (
            <li key={actor.id}>
                <p>{actor.name}</p>
                <img src={`https://image.tmdb.org/t/p/w400${actor.profile_path}`} />
            </li>
      ))}
    </ul>
  )
}

export default Actors