import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
// import { FaAngleLeft, FaAngleRight } from "react-icons/fa";

import "./Appointment.css";

const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

const Appointment = () => {
  // const [year, setYear] = useState(0);
  // const [month, setMonth] = useState(0);
  // const [day, setDay] = useState(0);
  // const [hour, setHour] = useState(null);
  // const [listDays, setListDays] = useState([]);
  // const [listHours, setListHours] = useState([]);
  // const [listAppointments, setListAppointments] = useState([]);

  // const handleLeftDate = () => {
  //   let theDate = new Date(year, month, 1);
  //   theDate.setMonth(theDate.getMonth() - 1); //esquerda - 1
  //   setYear(theDate.getFullYear());
  //   setMonth(theDate.getMonth());
  //   setDay(1);
  // };

  // const handleRightDate = () => {
  //   let theDate = new Date(year, month, 1);
  //   theDate.setMonth(theDate.getMonth() + 1); //direita + 1
  //   setYear(theDate.getFullYear());
  //   setMonth(theDate.getMonth());
  //   setDay(1);
  // };

  // useEffect(() => {
  //   let daysMonth = new Date(year, month+1, 0).getDate();
  //   let newListDays = [];

  //   for(let i = 1; i <= daysMonth; i+=1){
  //     let compositionDate = new Date(year, month, i);
  //     let year = compositionDate.getFullYear();
  //     let month = compositionDate.getMonth() + 1   //jan = mês 1
  //     let day = compositionDate.getDate();
        //let selectDate = `${year}-${month}-${day}`;

        // month = month < 10 ? `0${month}` : month;
        // day = day < 10 ? `0${day}` : day;

  //     newListDays.push({
  //       weekDayName: days[compositionDate.getDay()],
  //       number: i
  //     })
  //   }

  //   setListDays(newListDays);    //lista dos dias qtd e nome do dia
  //   setDay(1);
  //   setListHours([]);
  //   setHour(0);

  // }, [month, year]);

  // useEffect(() => {
  //   if(day > 0){
  //     let compositionDate = new Date(year, month, day);
  //     let year = compositionDate.getFullYear();
  //     let month = compositionDate.getMonth() + 1   //jan = mês 1
  //     let day = compositionDate.getDate();
  //     let selectDate = `${year}-${month}-${day}`;

     
  //   }
  // }, [day]);

  // useEffect(() => {
  //   let today = new Date();
  //   setYear(today.getFullYear());
  //   setMonth(today.getMonth());
  //   setDay(today.getDate());
  // }, []);

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
          <div className="calendlyDate">
            {/* <button className="faAngleLeft" onClick={handleLeftDate}>
              <FaAngleLeft size={20} />
              </button>
              <div className="dateText">
              <p>
              {months[month]} {year}
              </p>
              </div>
              <button className="faAngleRight" onClick={handleRightDate}>
              <FaAngleRight size={20} />
            </button>  */}
            <input type="date" />
          </div>
        </div>
        <div className="hour">
          <p>Choose your hour</p>
          <div className="hour_block">
            {/* <ul className="hour_menu">
              {listHours.map((hour, key) => (
                <li 
                  key={key}
                  onClick={() => {}} 
                  className="hour_item_list"
                >
                  <p className="hour_text">{hour}</p>
                </li>
              ))}
            </ul>*/}
          <select name="hour" id="hour" className="hour_menu" defaultValue='hour'>
            <option value="hour">09:00</option>
            <option value="hour">10:00</option>
            <option value="hour">11:00</option>
            <option value="hour">12:00</option>
            <option value="hour">14:00</option>
          </select>
          </div> 
        </div>
        <div className="service">
          <p>Service</p>
          <select name="service" id="services" defaultValue='service'>
            <option value="service" disabled selected>
              Choose the Service
            </option>
            <option value="service">Corte Premium Feminino</option>
            <option value="service">Escova Premium Feminino</option>
            <option value="service">Penteado Premium Feminino</option>
            <option value="service">Pigmentação Premium Feminino</option>
            <option value="service">Corte Premium Masculino</option>
            <option value="service">Noiva Premium</option>
          </select>
        </div>
        {/*to = mycalendly somente para demonstração*/}
        <Link to="/mycalendly">               
          <button type="button" className="appointment_button">
            BOOK
          </button>
        </Link>{" "}
      </div>
    </div>
  );
};

export default Appointment;

