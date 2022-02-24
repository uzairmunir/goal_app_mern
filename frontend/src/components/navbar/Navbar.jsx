import React from 'react';
import './Navbar.css';
import { FaSignInAlt, FaSignOutAlt, FaUser } from 'react-icons/fa';
import { Link, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { logout, reset } from '../../features/authSlice/authSlice';

const Navbar = () => {
  const { user } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // Logout User
  const logoutUser = () => {
    dispatch(logout());
    dispatch(reset());
    navigate('/');
  };

  return (
    <nav>
      <div className='nav-logo'>
        <Link to='/'>GoalSetter</Link>
      </div>
      {user ? (
        <button className='logout-btn' onClick={logoutUser}>
          <FaSignOutAlt />
          <span>Logout</span>
        </button>
      ) : (
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
      )}
    </nav>
  );
};

export default Navbar;
