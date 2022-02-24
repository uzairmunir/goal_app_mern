import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Routes, Route } from 'react-router-dom';
import Dashboard from './pages/dashboard';
import Register from './pages/register';
import Login from './pages/login';
import Navbar from './components/navbar/Navbar';
import { useSelector } from 'react-redux';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const App = () => {
  const { user } = useSelector((state) => state.auth);
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' element={user ? <Dashboard /> : <Login />} />
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />
        </Routes>
      </Router>
      <ToastContainer />
    </>
  );
};

export default App;
