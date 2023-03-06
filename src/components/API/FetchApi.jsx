import axios from 'axios';

axios.defaults.baseURL = 'https://api.themoviedb.org/3/';
export const API_KEY = 'f983fc840eb543faba07dcbe6db19b0b';

export const getTrendingMovie = async (pageNumber = 1, options) => {
  const response = await axios.get(
    `trending/all/day?api_key=${API_KEY}&page=${pageNumber}`,
    options
  );
  return response.data;
};

export const fetchSearchMovie = async (searchQuery, pageNumber, options) => {
  const response = await axios.get(
    `search/movie?api_key=${API_KEY}&language=en-US&query=${searchQuery}&page=${pageNumber}&include_adult=false`,
    options
  );
  return response.data;
};

export const getMovieDetails = async (movieId, options) => {
  const response = await axios.get(
    `movie/${movieId}?api_key=${API_KEY}&language=en-US`,
    options
  );
  return response.data;
};

export const getMovieCredits = async (movieId, options) => {
  const response = await axios.get(
    `movie/${movieId}/credits?api_key=${API_KEY}&language=en-US`,
    options
  );
  return response.data;
};

export const getMovieReviews = async (movieId, options) => {
  const response = await axios.get(
    `movie/${movieId}/reviews?api_key=${API_KEY}&language=en-US&page=1`,
    options
  );
  return response.data;
};
