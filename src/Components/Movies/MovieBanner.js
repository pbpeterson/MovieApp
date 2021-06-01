import React from 'react';
import { useNavigate } from 'react-router';
import { GET_IMAGE } from '../../api';

const MovieBanner = ({ movies }) => {
  const [movieNav, setMovieNav] = React.useState(1);
  const navigate = useNavigate();

  React.useEffect(() => {
    function attREd() {
      const movie = document.querySelector('.slide');
      const img = document.querySelector('img').scrollWidth;
      movie.style.transform = `translateX(-${movieNav * img - img * 1}px)`;
    }
    window.addEventListener('resize', attREd);
    return () => {
      window.removeEventListener('resize', attREd);
    };
  }, [movieNav]);

  function nextSlide() {
    setMovieNav(movieNav + 1);
    const img = document.querySelector('img').scrollWidth;
    const movie = document.querySelector('.slide');
    movie.style.transform = `translateX(-${movieNav * img}px)`;
  }

  function prevSlide() {
    const img = document.querySelector('img').scrollWidth;
    const movie = document.querySelector('.slide');
    movie.style.transform = `translateX(-${movieNav * img - img * 2}px)`;
    setMovieNav(movieNav - 1);
  }

  return (
    <div className="movieMain">
      {movieNav !== 1 && (
        <button className="prev" onClick={prevSlide}>
          Prev
        </button>
      )}
      <ul className="slide">
        {movies.map((currentMovie) => (
          <li key={currentMovie.id} className="movieBanner">
            {console.log(currentMovie)}
            <img
              src={`${GET_IMAGE}${currentMovie.backdrop_path}`}
              alt={currentMovie.title}
              onClick={() => {
                navigate(`/filme/${currentMovie.id}`);
              }}
            />
          </li>
        ))}
      </ul>
      {movieNav < 20 && (
        <button className="next" onClick={nextSlide}>
          Next
        </button>
      )}
    </div>
  );
};

export default MovieBanner;
