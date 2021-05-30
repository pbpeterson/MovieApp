import React from 'react';
import { useNavigate } from 'react-router';
import { GET_IMAGE } from '../../api';

const MovieBanner = ({ movies }) => {
  const [movieNav, setMovieNav] = React.useState(0);
  const [incrementadorPos, setIncrementadorPos] = React.useState(0);
  const navigate = useNavigate();

  function nextSlide() {
    const img = document.querySelector('img').scrollWidth;
    const movie = document.querySelectorAll('.movieBanner');
    setMovieNav(movieNav + 1);
    setIncrementadorPos(incrementadorPos + 1);
    movie[movieNav + 1].style.transform = `translateX(-${
      (incrementadorPos + 1) * img
    }px)`;
    console.log(movieNav);
  }

  function prevSlide() {
    const img = document.querySelector('img').scrollWidth;
    const movie = document.querySelectorAll('.movieBanner');
    setMovieNav(movieNav - 1);
    movie[movieNav].style.transform = `translateX(+${
      (incrementadorPos + 1) * img
    }px)`;
    console.log(movieNav);
    setIncrementadorPos(incrementadorPos - 1);
  }

  return (
    <div className="movieMain">
      {movies.map((currentMovie) => (
        <div key={currentMovie.id} className="movieBanner">
          {movieNav !== 0 && (
            <button className="prev" onClick={prevSlide}>
              Prev
            </button>
          )}
          <img
            src={`${GET_IMAGE}${currentMovie.backdrop_path}`}
            alt={currentMovie.title}
            onClick={() => {
              navigate(`/filme/${currentMovie.id}`);
            }}
          />
          {movieNav < 19 && (
            <button className="next" onClick={nextSlide}>
              Next
            </button>
          )}
        </div>
      ))}
    </div>
  );
};

export default MovieBanner;
