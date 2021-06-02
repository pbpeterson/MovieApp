import React from 'react';
import { useNavigate } from 'react-router';
import { GET_IMAGE } from '../../api';
import { ReactComponent as Info } from '../Assets/info.svg';

const Movies = ({ movie }) => {
  const navigate = useNavigate();
  return (
    <div className="filmes container animaLeft">
      {movie.map((serie) => (
        <div
          key={serie.id}
          className="filme"
          onClick={() => {
            navigate(`/serie/${serie.id}`);
          }}
        >
          <img src={`${GET_IMAGE}${serie.poster_path}`} alt={serie.title} />
          <div className="info">
            <Info />
          </div>
          <div className="capa"></div>
        </div>
      ))}
    </div>
  );
};

export default Movies;
