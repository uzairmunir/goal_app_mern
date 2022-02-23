import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { FaSignInAlt } from 'react-icons/fa';
import { useState } from 'react';
import { reset, login } from '../../features/authSlice/authSlice';
import { useEffect } from 'react';

const Login = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });
  const { email, password } = formData;
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { user, isLoading, isError, isSuccess, message } = useSelector(
    (state) => state.auth
  );

  useEffect(() => {
    if (isError) {
      toast.error(message);
    }
    if (user || isSuccess) {
      navigate('/');
    }
    dispatch(reset());
  }, [user, isError, isSuccess, message, dispatch]);
  // Function to handle onChange
  const handleChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };
  // Function to handle submit
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email || !password) {
      toast.error('All Fields are required');
    }
    const userData = { email, password };
    dispatch(login(userData));
    setFormData({ email: '', password: '' });
  };
  if (isLoading) {
    return 'Loading...';
  }
  return (
    <section className='register-container'>
      <h1>
        <FaSignInAlt />
        <span>Login </span>
      </h1>
      <p>Login and start setting goals</p>
      <section className='form-container'>
        <form onSubmit={handleSubmit}>
          <div className='form-group'>
            <label htmlFor='email'>Email </label>
            <input
              type='email'
              name='email'
              id='email'
              placeholder='Please enter your email'
              value={email}
              onChange={handleChange}
            />
          </div>
          <div className='form-group'>
            <label htmlFor='password'>Password </label>
            <input
              type='text'
              name='password'
              id='password'
              placeholder='Please enter your password'
              value={password}
              onChange={handleChange}
            />
          </div>
          <button className='register-btn' type='submit'>
            Login
          </button>
        </form>
      </section>
    </section>
  );
};

export default Login;
