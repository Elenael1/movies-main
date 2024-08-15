import axios from "axios";


const fetchTrendingFilms = async (keyWord="Barbie") => {
    try {
      const {data} = await axios.get(`https://api.themoviedb.org/3/search/movie?api_key=5456eae918aecb3e2e60ac718603b47e&query=${keyWord}&page=1`)
      if (!data.results.length ) {
        throw new Error('Not found');
      };
      return data.results
    } catch (error) {
      throw error;
    }
  };

  export const fetchPopularFims = async () => {
    try {
      const fetch = await axios.get('https://api.themoviedb.org/3/trending/movie/week?language=en-US&api_key=5456eae918aecb3e2e60ac718603b47e')
      return fetch.data.results;
    } catch (error) {
      throw error;
    }
  }

  export const fetchDetailsById = async (id = "1011985") => {
    try {
      const { data } = await axios.get(
        `https://api.themoviedb.org/3/movie/${id}?language=en-US&api_key=5456eae918aecb3e2e60ac718603b47e`
      );
      if (!data) {
        throw new Error("Not found");
      }
      return data;
    } catch (error) {
      throw error;
    }
  };

  export const fetchMoviesReviews = async (id = "1011985") => {
    try {
      const {data} = await axios.get(
        `https://api.themoviedb.org/3/movie/${id}/reviews?language=en-US&page=1&api_key=5456eae918aecb3e2e60ac718603b47e`
      );
      // console.log(data)
      if (!data) {
        throw new Error("Not found");
      }
      return data.results;
    } catch (error) {
      console.log(error)
    }
  }

  fetchMoviesReviews()

  export const fetchActors = async (id = "1011985") => {
    try {
      const {data} = await axios.get(
        `https://api.themoviedb.org/3/movie/${id}/credits?language=en-US&api_key=5456eae918aecb3e2e60ac718603b47e`
      )
      console.log(data.cast)
      if (!data) {
        throw new Error("Not found");
      }
      return data.cast;
    } catch (error) {
      console.log(error)
    }
  }

  fetchActors()
  
  // fetchPopularFims().then(data => {
  //   return data.JSON();
  // }).then ( (result) => {
  //   console.log(result);
  // })

  export default fetchTrendingFilms;