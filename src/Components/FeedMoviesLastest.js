import React from 'react';
import { API_LASTEST } from '../api';
import UseFetch from '../Helper/Hooks/UseFetch';
import Movies from './Movies/Movies';

const FeedMoviesLastest = () => {
  const { request, data } = UseFetch();
  React.useEffect(() => {
    request(API_LASTEST);
  }, [request]);
  if (data) {
    return (
      <>
        <Movies movie={data.results} />
      </>
    );
  } else return null;
};

export default FeedMoviesLastest;
