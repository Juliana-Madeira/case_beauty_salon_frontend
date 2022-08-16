import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Footer from '../../components/Footer/Footer';
import api from '../../utils/api.utils';

import './Login.css';


const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [setMessage] = useState('');

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      await api.login({email, password})
      navigate('/salons')
      setMessage('Welcome!')
      console.log('success login')
    } catch (error) {
      console.error(error)
    }
    setEmail('');
    setPassword('');
  }

  return (
    <div className='login'>
      <div className='login_title'>
        <img src="https://images.unsplash.com/photo-1499557354967-2b2d8910bcca?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1036&q=80" alt="salon_woman" />
        <span>Welcome back!</span>
      </div>
      <form className='form_login' 
      onSubmit={handleSubmit}
      >
        <input 
          type="email" 
          placeholder='Email' 
          name='email' 
          value={email} 
          required 
          onChange={(e) => setEmail(e.target.value)} 
          />
        <input 
          type="password" 
          placeholder='Password' 
          name='password' 
          value={password} 
          required 
          onChange={(e) => setPassword(e.target.value)}
          />
        <Link to='/salons'>
          <button className='button_login' type='submit'>Login</button>
        </Link> 
      </form>
      <div className='login_links'>
        <Link to='#password' className='login_links_password'>Forgot your Password?</Link>
        <p className='login_links_account'>Don´t have an account?<Link to='/signup' ><span>Sign up</span></Link></p> 
      </div>
      <Footer/>
    </div>
  )
}

export default Login;