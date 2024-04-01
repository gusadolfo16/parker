import React from 'react';
import Gallery from '../components/Gallery';
import Navbar from '../components/Navbar';

const Home = ({ user }) => {
  return (
    <div>
      <Navbar user={user} />
      <Gallery />
    </div>
  );
};

export default Home;
