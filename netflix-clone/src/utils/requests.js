const API_KEY = process.env.REACT_APP_API_KEY;

const requests = {
  fetchTrending: `/trending/all/week?api_key=${API_KEY}&language=en-US`,
  fetchNetflixOriginals: `/discover/tv?api_key=${API_KEY}&with_networks=213`,
  fetchTopRatedMovies: `/movie?/top_rated?api_key=${API_KEY}&&language=en-US`,
  fetchActionMovies: `/discover/movies?api_key=${API_KEY}&with_geners=28`,
  fetchComedyMovies: `/discover/movies?api_key=${API_KEY}&with_geners=35`,
  fetchHorrorMovies: `/discover/movies?api_key=${API_KEY}&with_geners=27`,
  fetchRomanceMovies: `/discover/movies?api_key=${API_KEY}&with_geners=10749`,
  fetchDocumentaries: `/discover/movies?api_key=${API_KEY}&with_geners=99`,
  fetchTvshow: `tv/popular?api_key=${API_KEY}&language=en-US&page=1`,
};
export default requests;
