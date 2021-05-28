import React from 'react';
import { API_URL } from '../api';
import UseFetch from '../Helper/Hooks/UseFetch';
import Movies from './Movies/Movies';

const FeedMovies = () => {
  const { request, data, loading, error } = UseFetch();

  React.useEffect(() => {
    request(API_URL);
  }, [request]);
  if (data) {
    return (
      <>
        <Movies movie={data.results} />
      </>
    );
  } else return null;
};
export default FeedMovies;
