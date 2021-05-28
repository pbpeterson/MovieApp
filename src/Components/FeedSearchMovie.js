import React from 'react';
import { useParams } from 'react-router';
import { API_SEARCH } from '../api';
import UseFetch from '../Helper/Hooks/UseFetch';
import Movies from './Movies/Movies';

const FeedSearchMovie = () => {
  const { id } = useParams();
  const { request, data } = UseFetch();
  React.useEffect(() => {
    request(`${API_SEARCH}${id}`);
  }, [request, id]);

  if (data) {
    return <Movies movie={data.results} />;
  } else return null;
};

export default FeedSearchMovie;
