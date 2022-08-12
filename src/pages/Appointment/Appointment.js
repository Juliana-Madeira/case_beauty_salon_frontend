import React from "react";
import { Link } from "react-router-dom";

import "./Appointment.css";

const Appointment = () => {
  return (
    <div className="appointment">
      <div className="appointment_title">
        <p>Book Appointment</p>
      </div>
      <div className="appointment_hairdresser_profile">
        <div className="appointment_hairdresserpic"></div>
        <div className="apppointment_hairdresser_text">
          <p>Fulano de Tal</p>
          <small>All days</small>
        </div>
      </div>
      <div className="appointment_table">
        <div className="date">
          <p>Select your date</p>
          <input type="date" />
        </div>
        <div className='hour'>
          <p>Choose your hour</p>
          <div>
            <ul>
              <li>09:00</li>
              <li>10:00</li>
              <li>11:00</li>
              <li>12:00</li>
              <li>13:00</li>
              <li>14:00</li>
              <li>15:00</li>
              <li>16:00</li>
              <li>17:00</li>
              <li>18:00</li>
              <li>19:00</li>
              <li>20:00</li>
            </ul>
          </div>
        </div>
        <div className='service'>
          <p>Service</p>
          <select name="service" id="services">
            <option value="service">Corte Premium Feminino</option>
            <option value="service">Escova Premium Feminino</option>
            <option value="service">Penteado Premium Feminino</option>
            <option value="service">Pigmentação Premium Feminino</option>
            <option value="service">Corte Premium Masculino</option>
            <option value="service">Noiva Premium</option>
          </select>
        </div> 
        <Link to='/mycalendly'><button type='button' className="appointment_button">BOOK</button></Link>     {/*to = mycalendly somente para demonstração*/}   
      </div>
    </div>
  );
};

export default Appointment;
