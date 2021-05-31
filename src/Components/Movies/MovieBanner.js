import React from 'react';
import { useNavigate } from 'react-router';
import { GET_IMAGE } from '../../api';

const MovieBanner = ({ movies }) => {
  const navigate = useNavigate();

  return (
    <div className="movieMain">
      {movies.map((currentMovie) => (
        <div key={currentMovie.id} className="movieBanner">
          <img
            src={`${GET_IMAGE}${currentMovie.backdrop_path}`}
            alt={currentMovie.title}
            onClick={() => {
              navigate(`/filme/${currentMovie.id}`);
            }}
          />
        </div>
      ))}
    </div>
  );
};

export default MovieBanner;
