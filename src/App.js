import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import FeedMovies from './Components/FeedMovies';
import FeedMoviesLastest from './Components/FeedMoviesLastest';
import FeedMoviesTrending from './Components/FeedMoviesTrending';
import FeedSearchMovie from './Components/FeedSearchMovie';
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
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
