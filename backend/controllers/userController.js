const asyncHandler = require('express-async-handler');

//desc      Register User
//router    /api/users/register
//access     Public
const registerUser = asyncHandler(async (req, res) => {
  res.json('Register');
});

//desc      Login User
//router    /api/users/login
//access     Public
const loginUser = asyncHandler(async (req, res) => {
  res.json('Login');
});

//desc      Get User
//router    /api/users/me
//access     Private
const getUser = asyncHandler(async (req, res) => {
  res.json('Get User');
});

module.exports = { registerUser, loginUser, getUser };
