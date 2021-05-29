import React from 'react';
import { API_SERIES, API_TRENDING } from '../api';
import MovieHome from './Movies/MovieHome';

const FeedMovies = () => {
  return (
    <>
      <MovieHome title="Em Alta" apiLink={API_TRENDING} type="movie" />
      <MovieHome title="Series" apiLink={API_SERIES} type="serie" />
    </>
  );
};
export default FeedMovies;
