import React from "react";
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';

import Appointment from "./pages/Appointment/Appointment";
import Hairdresser from "./pages/Hairdresser/Hairdresser";
import Home from "./pages/Home/Home";
import Login from './pages/Login/Login';
import MyCalendly from "./pages/MyCalendly/MyCalendly";
import MyClient from "./pages/MyClient/MyClient";
import Salons from "./pages/Salons/Salons";

function App() {
  return (
    <div className="App">
      <Router>
          <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/appointment" element={<Appointment/>}/>
            <Route path="/login" element={<Login />}/>
            <Route path="/salons" element={<Salons />}/>
            <Route path="/hairdresser" element={<Hairdresser />}/>
            <Route path="/mycalendly" element={<MyCalendly />}/>
            <Route path="/myclient" element={<MyClient />}/>
          </Routes>
      </Router>
    </div>
  );
}

export default App;
