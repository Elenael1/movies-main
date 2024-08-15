import React from 'react'
import axios from "axios";
import MoviesList from "../components/movies/moviesList/MoviesList"
import fetchTrendingFilms from "../API/FilmsApi";
import { useEffect, useState } from "react";
import FormSearch from '../components/movies/formSearch/FormSearch'
import {Routes, Route, useParams} from 'react-router-dom';


const Search = () => {
    const [data, setData] = useState([])
    const [keyWord, setKeyWord] = useState("");
  
    useEffect(() => {
      if (keyWord) {
        fetchTrendingFilms(keyWord).then(setData);
      } 
    }, [keyWord]);
    
    const getKeyWord = (keyWord) => {
      setKeyWord(keyWord);
    };
  
    
    return (
      <>
      <FormSearch getKeyWord={getKeyWord}/>
      <MoviesList data={data}/>
      {/* <Search /> */}
      </>
    );
}

export default Search






