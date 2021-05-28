export const API_URL = `https://api.themoviedb.org/3/movie/top_rated?api_key=${process.env.REACT_APP_API_KEY}&language=pt-br`;

export const API_LASTEST = `https://api.themoviedb.org/3/movie/popular?api_key=${process.env.REACT_APP_API_KEY}&language=pt-br`;

export const API_TRENDING = `https://api.themoviedb.org/3/trending/all/day?api_key=${process.env.REACT_APP_API_KEY}&language=pt-br`;

export const API_SEARCH = `https://api.themoviedb.org/3/search/movie?api_key=${process.env.REACT_APP_API_KEY}&language=pt-br&page=1&include_adult=false&query=`;

export const API_CURRENT_MOVIE = (id) => {
  return `https://api.themoviedb.org/3/movie/${id}?api_key=${process.env.REACT_APP_API_KEY}&language=pt-br`;
};

export const GET_IMAGE = 'https://image.tmdb.org/t/p/w1280/';
