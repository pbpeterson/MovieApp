import React from 'react';
import { useParams } from 'react-router';
import { API_CURRENT_MOVIE, GET_IMAGE } from '../../api';
import UseFetch from '../../Helper/Hooks/UseFetch';

const Movie = () => {
  const { id } = useParams();
  const { request, data } = UseFetch();
  React.useEffect(() => {
    request(API_CURRENT_MOVIE(id));
  }, [request, id]);
  if (data)
    return (
      <div className="animaLeft container">
        <h1>{data.title}</h1>
        <div className="flex">
          <img
            className="poster"
            src={`${GET_IMAGE}${data.backdrop_path}`}
            alt={data.title}
          />
          <div className="overview">
            <h2>Sinopse</h2>
            <p>{data.overview}</p>
          </div>
        </div>
      </div>
    );
  else return null;
};

export default Movie;
