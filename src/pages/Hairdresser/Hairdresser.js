import React, { useState } from 'react';
import axios from 'axios';
import {Link, useParams} from 'react-router-dom';
import Footer from '../../components/Footer/Footer';

import './Hairdresser.css';

const Hairdresser = () => {
  const hairdresserId = useParams();
  const [hairdresser, setHairdresser] = useState([]);

  

 
  return (
    <div className='hairdresser'>
        <div className='hairdresser_title'>
            <p>Choose Your Hairdresser</p>
        </div>
        <div className='wrap_hairdresser'>
          <Link to='/appointment' className='hairdresser_profile'>
          {/* {hairdresser.map ((hd) => {
            const {name, photo} = hd; return ( */}
            <div className='hairdresserpic' >
            </div>
            <div className='hairdresser_text'>
              <p>hairdresser name</p>
              <small>All days</small>
            </div>  
          </Link>
          <Link to='/appointment' className='hairdresser_profile'>
          {/* {hairdresser.map ((hd) => {
            const {name, photo} = hd; return ( */}
            <div className='hairdresserpic' >
            </div>
            <div className='hairdresser_text'>
              <p>hairdresser name</p>
              <small>All days</small>
            </div>  
          </Link>
          <Link to='/appointment' className='hairdresser_profile'>
          {/* {hairdresser.map ((hd) => {
            const {name, photo} = hd; return ( */}
            <div className='hairdresserpic' >
            </div>
            <div className='hairdresser_text'>
              <p>hairdresser name</p>
              <small>All days</small>
            </div>  
          </Link>
          <Link to='/appointment' className='hairdresser_profile'>
          {/* {hairdresser.map ((hd) => {
            const {name, photo} = hd; return ( */}
            <div className='hairdresserpic' >
            </div>
            <div className='hairdresser_text'>
              <p>hairdresser name</p>
              <small>All days</small>
            </div>  
          </Link>
          <Link to='/appointment' className='hairdresser_profile'>
          {/* {hairdresser.map ((hd) => {
            const {name, photo} = hd; return ( */}
            <div className='hairdresserpic' >
            </div>
            <div className='hairdresser_text'>
              <p>hairdresser name</p>
              <small>All days</small>
            </div>  
          </Link>
          <Link to='/appointment' className='hairdresser_profile'>
          {/* {hairdresser.map ((hd) => {
            const {name, photo} = hd; return ( */}
            <div className='hairdresserpic' >
            </div>
            <div className='hairdresser_text'>
              <p>hairdresser name</p>
              <small>All days</small>
            </div>  
          </Link>
          <Link to='/appointment' className='hairdresser_profile'>
          {/* {hairdresser.map ((hd) => {
            const {name, photo} = hd; return ( */}
            <div className='hairdresserpic' >
            </div>
            <div className='hairdresser_text'>
              <p>hairdresser name</p>
              <small>All days</small>
            </div>  
          </Link>
          <Link to='/appointment' className='hairdresser_profile'>
          {/* {hairdresser.map ((hd) => {
            const {name, photo} = hd; return ( */}
            <div className='hairdresserpic' >
            </div>
            <div className='hairdresser_text'>
              <p>hairdresser name</p>
              <small>All days</small>
            </div>  
          </Link>
          
        </div>
        <Footer/>
    </div>
  )
}

export default Hairdresser;