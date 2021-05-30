export const API_URL = `https://api.themoviedb.org/3/movie/top_rated?api_key=${process.env.REACT_APP_API_KEY}&language=pt-br`;

export const API_LASTEST = `https://api.themoviedb.org/3/movie/popular?api_key=${process.env.REACT_APP_API_KEY}&language=pt-br`;

export const API_TRENDING = `https://api.themoviedb.org/3/trending/all/day?api_key=${process.env.REACT_APP_API_KEY}&language=pt-br`;

export const API_SEARCH = `https://api.themoviedb.org/3/search/movie?api_key=${process.env.REACT_APP_API_KEY}&language=pt-br&page=1&include_adult=false&query=`;

export const API_SERIES = `https://api.themoviedb.org/3/discover/tv?api_key=${process.env.REACT_APP_API_KEY}&language=pt-BR&sort_by=popularity.desc&page=1&timezone=Brazil&include_null_first_air_dates=false&with_watch_monetization_types=flatrate`;

export const API_MOVIE_MAIN = `https://api.themoviedb.org/3/movie/upcoming?api_key=${process.env.REACT_APP_API_KEY}&language=pt-BR&page=1`;

export const API_CURRENT_MOVIE = (id) => {
  return `https://api.themoviedb.org/3/movie/${id}?api_key=${process.env.REACT_APP_API_KEY}&language=pt-br`;
};

export const API_TVSHOW = (id) => {
  return `https://api.themoviedb.org/3/tv/${id}?api_key=${process.env.REACT_APP_API_KEY}&language=pt-BR`;
};

export const GET_IMAGE = 'https://image.tmdb.org/t/p/w1280/';
