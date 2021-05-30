import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Header = () => {
  const navigate = useNavigate();
  const [movieName, setMovieName] = React.useState('');
  return (
    <header className="header container">
      <Link to="/populares" url={'top_rated?'}>
        Mais Populares
      </Link>
      <form
        onSubmit={() => {
          navigate(`search/${movieName}`);
        }}
      >
        <input
          type="text"
          value={movieName}
          onChange={({ target }) => setMovieName(target.value)}
        />
        <button>Enviar</button>
      </form>
    </header>
  );
};

export default Header;
