import React from 'react';
import './Navbar.css';
import { FaSignInAlt, FaSignOutAlt, FaUser } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav>
      <div className='nav-logo'>
        <Link to='/'>GoalSetter</Link>
      </div>
      <ul>
        <li>
          <Link to='/login'>
            <FaSignInAlt />
            <span>Login</span>
          </Link>
        </li>
        <li>
          <Link to='/register'>
            <FaUser />
            <span>Register</span>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
