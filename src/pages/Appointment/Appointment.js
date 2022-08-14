import React, { useState } from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";

import "./Appointment.css";

const Appointment = () => {
  const [year, setYear] = useState(0);
  const [month, setMonth] = useState(0);
  const [day, setDay] = useState(0);
  const [hour, setHour] = useState(null);
  const [listDays, setListDays] = useState([]);
  const [listHours, setListHours] = useState([]);

  const months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December'
  ]

  const days = [
    'Sun',
    'Mon',
    'Tue',
    'Wed',
    'Thu',
    'Fri',
    'Sat'
  ]

  useEffect(() => {
    let today = new Date();
    setYear(today.getFullYear());
    setMonth(today.getMonth());
    setDay(today.getDate());
  }, [])

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
          {/* <input type="date" /> */}
          <div className="calendlyDate">
            <button className="faAngleLeft"><FaAngleLeft size={20}/></button>
            <div className="monthText">
              <p>{months[month]} {year}</p>
            </div>
            <button className="faAngleRight"><FaAngleRight size={20}/></button>
          </div>

        </div>
        <div className="hour">
          <p>Choose your hour</p>
          <div>
            <ul className="hour_menu">
              {listHours.map((hour, key) => (
                <li key={key} className="hour_item_list">
                  {hour}
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="service">
          <p>Service</p>
          <select name="service" id="services">
            <option value="" disabled selected>Choose the Service</option>
            <option value="service">Corte Premium Feminino</option>
            <option value="service">Escova Premium Feminino</option>
            <option value="service">Penteado Premium Feminino</option>
            <option value="service">Pigmentação Premium Feminino</option>
            <option value="service">Corte Premium Masculino</option>
            <option value="service">Noiva Premium</option>
          </select>
        </div>
        <Link to="/mycalendly">
          <button type="button" className="appointment_button">
            BOOK
          </button>
        </Link>{" "}
        {/*to = mycalendly somente para demonstração*/}
      </div>
    </div>
  );
};

export default Appointment;
