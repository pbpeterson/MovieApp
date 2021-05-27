import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Header = () => {
  const navigate = useNavigate();
  const [movieName, setMovieName] = React.useState('');
  return (
    <div>
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
    </div>
  );
};

export default Header;
