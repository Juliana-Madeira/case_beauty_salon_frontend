import React, { useState } from "react";
import { Link } from "react-router-dom";
import Footer from "../../components/Footer/Footer";
import api from "../../utils/api.utils";

import "./SignUp.css";

const Signup = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
        const user = await api.signup({name, email, password})
        console.log('account created!')
    } catch (error) {
        console.error(error)
    }
    setEmail('');
    setName('');
    setPassword('');
  }

  return (
    <div className="signup">
      <img
        className="signup_img"
        src="https://images.unsplash.com/photo-1634449571010-02389ed0f9b0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
        alt="salon_woman-signup"
      />
      <div className="signup_title">
        <span>Welcome to the Case Beauty Salon!</span>
        <p>Create an Account</p>
      </div>
      <form className="signup_form" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Name"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="Email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <Link to="/login">
          <button className="button_signup" type="submit">
            SignUp
          </button>
        </Link>
      </form >
      <div className='signup_links'>
          <p className="signup_links_account">
            Already have an account?
            <Link to="/login">
              <span>Login</span>
            </Link>
          </p>
      </div>
      <Footer/>
    </div>
  );
};

export default Signup;
