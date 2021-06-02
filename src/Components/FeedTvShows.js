import React from 'react';
import { GET_TV_SHOW } from '../api';
import UseFetch from '../Helper/Hooks/UseFetch';
import Series from './Series/Series';

const FeedTvShows = () => {
  const { data, request } = UseFetch();
  React.useEffect(() => {
    request(GET_TV_SHOW);
  }, [request]);
  if (data) {
    return (
      <>
        <Series movie={data.results} />
      </>
    );
  } else return null;
};

export default FeedTvShows;
