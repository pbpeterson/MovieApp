import React from 'react';
import { GET_IMAGE } from '../api';

const Movies = ({ movie }) => {
  return (
    <div>
      {movie.map((filme) => (
        <div key={filme.id}>
          title: {filme.title}
          <img src={`${GET_IMAGE}${filme.poster_path}`} alt={filme.title} />
        </div>
      ))}
    </div>
  );
};

export default Movies;
