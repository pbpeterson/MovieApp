import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import FeedMovies from './Components/FeedMovies';
import FeedMoviesLastest from './Components/FeedMoviesLastest';
import FeedMoviesTrending from './Components/FeedMoviesTrending';
import FeedSearchMovie from './Components/FeedSearchMovie';
import Movie from './Components/Movies/Movie';
import Serie from './Components/Movies/Serie';
import Header from './Header';
import Home from './Home';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="top-rated" element={<FeedMovies />} />
          <Route path="populares" element={<FeedMoviesLastest />} />
          <Route path="trending" element={<FeedMoviesTrending />} />
          <Route path="search/:id" element={<FeedSearchMovie />} />
          <Route path="filme/:id" element={<Movie />} />
          <Route path="serie/:id" element={<Serie />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
