import React, { useEffect } from 'react';
import Header from '../../components/Header/Header';
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';
import { Link } from 'react-router-dom';

import './Home.css';

const Home = () => {

  return (
    <div>
        <Header/>
        <Navbar/>
        <div className='home'>
          <span><i>Style that fit your lifestyle</i></span>
          <Link to='/login'><button type='button'>BOOK</button></Link>        
        </div>
        <Footer/>
    </div>
  )
}

export default Home