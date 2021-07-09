import React from 'react';
import { useParams } from 'react-router';
import { API_TVSHOW, GET_IMAGE } from '../../api';
import UseFetch from '../../Helper/Hooks/UseFetch';

const Serie = () => {
  const { id } = useParams();
  const { request, data } = UseFetch();

  React.useEffect(() => {
    request(API_TVSHOW(id));
  }, [request, id]);
  if (data) {
    return (
      <div div className="animaLeft container">
        <h1>{data.original_name}</h1>
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
  } else return null;
};

export default Serie;
