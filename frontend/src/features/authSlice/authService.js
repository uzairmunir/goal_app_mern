import axios from 'axios';

// Register
const register = async (userData) => {
  const response = await axios.post('/api/users/register', userData);
  if (response.data) {
    localStorage.setItem('user', JSON.stringify(response.data));
  }
  return response.data;
};
// Login
const login = async (userData) => {
  const response = await axios.post('/api/users/login', userData);
  if (response.data) {
    localStorage.setItem('user', JSON.stringify(response.data));
  }
  return response.data;
};
// Logout
const logout = () => {
  localStorage.removeItem('user');
};

const authService = { register, login, logout };

export default authService;
