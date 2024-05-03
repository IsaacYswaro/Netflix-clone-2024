const API_KEY = process.env.REACT_APP_API_KEY;
// const API_KEY = "3afd62560367f868d80b1d927a4a009d"
const requests = {
  fetchNetflixOriginals: `/discover/tv?api_key=${API_KEY}&with_networks=213`,
  fetchTrending: `/trending/all/day?api_key=${API_KEY}&language=en-US`,
  fetchPopular: `/movie/popular?api_key=${API_KEY}&language=en-US`,
  fetchTopRated: `/movie?/top_rated?api_key=${API_KEY}&language=en-US`,
  fetchActionMovies: `/discover/movie?api_key=${API_KEY}&with_genres=28`,
  fetchComedyMovies: `/discover/movie?api_key=${API_KEY}&with_genres=35`,
  fetchHorrorMovies: `/discover/movie?api_key=${API_KEY}&with_genres=27`,
  fetchRomanceMovies: `/discover/movie?api_key=${API_KEY}&with_genres=10749`,
  fetchTvshow: `/tv/popular?api_key=${API_KEY}&language=en-US&page=1`,
  fetchDocumentaries: `/discover/movie?api_key=${API_KEY}&with_genres=99`,
};
export default requests;
