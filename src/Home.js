import React from 'react';
import FeedMovies from './Components/FeedMovies';
import Head from './Helper/Head';

const Home = () => {
  return (
    <section>
      <Head title="Home" />
      <FeedMovies />
    </section>
  );
};

export default Home;
