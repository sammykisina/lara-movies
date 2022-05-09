const API_KEY = process.env.REACT_APP_API_KEY;
const BASE_URL = "https://api.themoviedb.org/3";

const requests = {
  fetchPopularMovies: `${BASE_URL}/movie/popular?api_key=${API_KEY}&language=en-US`,
  fetchPopularTvs: `${BASE_URL}/tv/popular?api_key=${API_KEY}&language=en-US`,

  fetchTreadingMovies: `${BASE_URL}/trending/movie/day?api_key=${API_KEY}`,
  fetchTrendingTV: `${BASE_URL}/trending/tv/day?api_key=${API_KEY}&language=en-US`,

  fetchNetflixOriginals: `${BASE_URL}/discover/movie?api_key=${API_KEY}&with_networks=213`,

  fetchTopRatedMovies: `${BASE_URL}/movie/top_rated?api_key=${API_KEY}&language=en-US`,
  fetchTopRatedTv: `${BASE_URL}/tv/top_rated?api_key=${API_KEY}&language=en-US`,

  fetchGenres: `${BASE_URL}/genre/movie/list?api_key=${API_KEY}&language=en-US`,
  //   fetchComedyMovies: `${BASE_URL}/discover/movie?api_key=${API_KEY}&language=en-US&with_genres=35`,
  //   fetchHorrorMovies: `${BASE_URL}/discover/movie?api_key=${API_KEY}&language=en-US&with_genres=27`,
  //   fetchRomanceMovies: `${BASE_URL}/discover/movie?api_key=${API_KEY}&language=en-US&with_genres=10749`,
  //   fetchDocumentaries: `${BASE_URL}/discover/movie?api_key=${API_KEY}&language=en-US&with_genres=99`,
};

export default requests;
