import React from 'react';
import { API_TRENDING } from '../api';
import UseFetch from '../Helper/Hooks/UseFetch';
import Movies from './Movies/Movies';

const FeedMoviesTrending = () => {
  const { request, data } = UseFetch();
  React.useEffect(() => {
    request(API_TRENDING);
  }, [request]);
  if (data) {
    return (
      <>
        <Movies movie={data.results} />
      </>
    );
  } else return null;
};

export default FeedMoviesTrending;
