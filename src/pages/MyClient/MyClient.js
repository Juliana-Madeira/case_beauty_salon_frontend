import React from 'react';
import { Link } from 'react-router-dom';


import './MyClient.css';

const MyClient = () => {
  return (
    <div className='myclient'>
      <div className="myclient_title">
        <p>My Client</p>
      </div>
      <div className="client_profile">
        <div className="clientpic"></div>
        <div className="client_text">
          <p>Fulano de Tal</p>
          <small>Salon Tal</small>
        </div>
      </div>
      <ul className="clients_list">
        <li>
            <span>Email</span> client@client.com
        </li>
        <li>
            <span>Phone Number</span> 99999-9999
        </li>
        <li>
            <span>Salon</span> Moema
        </li>
      </ul>
      <Link to='/myclient'>
        <button className='button_validate' type='submit'>Validate</button>
      </Link> 
    </div>
  )
}

export default MyClient