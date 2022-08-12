import React from "react";
import { Link } from "react-router-dom";

import "./MyCalendly.css";

const MyCalendly = () => {
  return (
    <div className="mycalendly">
      <div className="mycalendly_title">
        <p>My Calendly</p>
      </div>
      <div className="mycalendly_table">
        <div className="salon">
          <p>Select Salon</p>
          <select name="salon" id="salon">
            <option value="salon">Moema</option>
            <option value="salon">Higienópolis</option>
            <option value="salon">Mooca</option>
            <option value="salon">Morumbi</option>
            <option value="salon">Ipiranga</option>
          </select>
        </div>
        <div className="date">
          <p>Select the date</p>
          <input type="date" />
        </div>
        <div className="yourclients">
          <p>Your clients</p>
          <ul className="clients_list">
            <li>
              <Link to="/myclient">
                <span>09:00</span> Client name here
              </Link>
            </li>
            <li>
              <Link to="/myclient">
                <span>10:00</span> Client name here
              </Link>
            </li>
            <li>
              <Link to="/myclient">
                <span>11:00</span> Client name here
              </Link>
            </li>
            <li>
              <Link to="/myclient">
                <span>12:00</span> Client name here
              </Link>
            </li>
            <li>
              <Link to="/myclient">
                <span>13:00</span> Client name here
              </Link>
            </li>
            <li>
              <Link to="/myclient">
                <span>14:00</span> Client name here
              </Link>
            </li>
            <li>
              <Link to="/myclient">
                <span>15:00</span> Client name here
              </Link>
            </li>
            <li>
              <Link to="/myclient">
                <span>16:00</span> Client name here
              </Link>
            </li>
            <li>
              <Link to="/myclient">
                <span>17:00</span> Client name here
              </Link>
            </li>
            <li>
              <Link to="/myclient">
                <span>18:00</span> Client name here
              </Link>
            </li>
            <li>
              <Link to="/myclient">
                <span>19:00</span> Client name here
              </Link>
            </li>
            <li>
              <Link to="/myclient">
                <span>20:00</span> Client name here
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default MyCalendly;
