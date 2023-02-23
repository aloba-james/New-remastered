import React from 'react';
import { Outlet } from 'react-router-dom';

import Hero from '../../components/hero/hero.component';
import Directory from '../../components/directory/directory.component';

const Home = () => {
  return (
    <div>
      <Hero />
      <Directory />
      <Outlet />
    </div>
  );
};

export default Home;
