import React from 'react';
import Navbar from './components/navbar';
import LandingSection from './components/BlogFetch';
import Headlines from './components/Headlines';
import Blogpage from './components/BlogPage';
import Footer from './components/Footer';
import { Outlet } from 'react-router-dom';

function App() {
  return (
    <div> 
      <Navbar />
      <Headlines />
      <Outlet />
      <LandingSection />
      <Blogpage />
      <Footer />
    </div>
  );
}

export default App;
