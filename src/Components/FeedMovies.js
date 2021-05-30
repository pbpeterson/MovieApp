import React from 'react';
import { API_MOVIE_MAIN, API_SERIES, API_TRENDING } from '../api';
import UseFetch from '../Helper/Hooks/UseFetch';
import MovieBanner from './Movies/MovieBanner';
import MovieHome from './Movies/MovieHome';

const FeedMovies = () => {
  const { request, data } = UseFetch();
  React.useEffect(() => {
    request(API_MOVIE_MAIN);
  }, [request]);
  if (data) {
    return (
      <>
        <MovieBanner movies={data.results} />
        <MovieHome title="Em Alta" apiLink={API_TRENDING} type="movie" />
        <MovieHome title="Series" apiLink={API_SERIES} type="serie" />
      </>
    );
  } else return null;
};
export default FeedMovies;
