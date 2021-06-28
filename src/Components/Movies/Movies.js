import React from 'react';
import { useNavigate } from 'react-router';
import { GET_IMAGE } from '../../api';
import { ReactComponent as Info } from '../Assets/info.svg';

const Movies = ({ movie }) => {
  const navigate = useNavigate();
  return (
    <div className="filmes container animaLeft">
      {movie.map((filme) => (
        <div
          key={filme.id}
          className="filme"
          onClick={() => {
            navigate(`/filme/${filme.id}`);
          }}
        >
          <div className="imagem">
            <img src={`${GET_IMAGE}${filme.poster_path}`} alt={filme.title} />
          </div>

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
