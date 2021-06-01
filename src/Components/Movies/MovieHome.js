import React from 'react';
import { useNavigate } from 'react-router';
import { GET_IMAGE } from '../../api';
import UseFetch from '../../Helper/Hooks/UseFetch';

const MovieHome = ({ title, apiLink }) => {
  const { request, data } = UseFetch();
  React.useEffect(() => {
    request(apiLink);
  }, [request, apiLink]);
  const navigate = useNavigate();
  if (data) {
    return (
      <div className="container">
        <h1 className="title">{title}</h1>
        <div className="filmesHome ">
          {data.results.map((filme) => (
            <div
              key={filme.id}
              className="filmeHome"
              onClick={() => {
                navigate(
                  `/${
                    filme.media_type && filme.media_type === 'movie'
                      ? 'filme'
                      : 'serie'
                  }/${filme.id}`,
                );
              }}
            >
              <img src={`${GET_IMAGE}${filme.poster_path}`} alt={filme.title} />
            </div>
          ))}
        </div>
      </div>
    );
  } else return null;
};

export default MovieHome;
