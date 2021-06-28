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
        {console.log(data)}
        <h1>{data.title}</h1>
        <img
          className="poster"
          src={`${GET_IMAGE}${data.backdrop_path}`}
          alt={data.title}
        />
        <h3>{data.vote_average}</h3>
        <p>{data.overview}</p>
      </div>
    );
  else return null;
};

export default Movie;
