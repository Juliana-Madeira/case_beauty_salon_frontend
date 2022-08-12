import React from 'react';
import { Link } from 'react-router-dom';
import Footer from '../../components/Footer/Footer';

import './Salons.css';

const Salons = () => {
  return (
    <div className='salons'>
        <div className='salons_greeting'>
            <p>Hi, 'client-name' choose your Salon</p>
        </div>
        <div className='salons_row'>
          <ul className='board__salon salons_list'>
            <Link to='/hairdresser' className='salons_link'><p>Mooca</p></Link>
            <Link to='/hairdresser' className='salons_link'><p>Pinheiros</p></Link>
            <Link to='/hairdresser' className='salons_link'><p>Ipiranga</p></Link>
            <Link to='/hairdresser' className='salons_link'><p>Morumbi</p></Link>
            <Link to='/hairdresser' className='salons_link'><p>Moema</p></Link>
          </ul>
        </div>
        <Footer/>
    </div>
  )
}

export default Salons