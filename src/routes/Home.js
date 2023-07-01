import React from 'react'
import Navbar from '../components/Navbar';
import HeroImg from '../components/HeroImg';
import Footer from '../components/Footer';
import Work from '../components/Work';
import AboutContent from '../components/AboutContent';
const home = () => {
  return (
    <div>
     <Navbar/>
     <HeroImg/>
     <AboutContent/>
     <Work/>
     <Footer/>
    </div>
  );
}

export default home
  