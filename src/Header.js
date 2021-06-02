import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';

const Header = () => {
  const navigate = useNavigate();
  const [movieName, setMovieName] = React.useState('');
  return (
    <header className="header container">
      <nav>
        {' '}
        <NavLink to="/" end>
          Home
        </NavLink>
        <NavLink to="/lancamentos">Novos</NavLink>
        <NavLink to="tv-show">TV Shows</NavLink>
        <NavLink to="trending">Trending</NavLink>
      </nav>
      <form
        onSubmit={() => {
          navigate(`search/${movieName}`);
        }}
      >
        <input
          type="text"
          value={movieName}
          onChange={({ target }) => setMovieName(target.value)}
          placeholder="Search"
        />
        <button>Enviar</button>
      </form>
    </header>
  );
};

export default Header;
