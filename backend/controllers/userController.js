const asyncHandler = require('express-async-handler');
const User = require('../models/userModel');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

//desc      Register User
//router    /api/users/register
//access     Public
const registerUser = asyncHandler(async (req, res) => {
  const { name, email, password } = req.body;
  // Check for all Fields
  if (!name || !email || !password) {
    res.status(400).json({ msg: 'All fields are required' });
  }
  // Check for existing user
  const existedUser = await User.findOne({ email });
  if (existedUser) {
    res.status(400).json({ msg: 'User with this email already exists' });
  }
  //Hash Password
  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(password, salt);
  const newUser = await User.create({ name, email, password: hashedPassword });
  if (newUser) {
    res.json({
      _id: newUser.id,
      name: newUser.name,
      email: newUser.email,
      token: generateJWT(newUser._id),
    });
  } else {
    res.status(400).json({ msg: 'Invalid User data' });
  }
});

//desc      Login User
//router    /api/users/login
//access     Public
const loginUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body;
  // Check for all Fields
  if (!email || !password) {
    res.status(400).json({ msg: 'All fields are required' });
  }
  // Find user in db
  const user = await User.findOne({ email });
  if (user && (await bcrypt.compare(password, user.password))) {
    res.json({
      _id: user.id,
      name: user.name,
      email: user.email,
      token: generateJWT(user._id),
    });
  } else {
    res.status(400).json({ msg: 'Invalid Credentials' });
  }
});

//desc      Get User
//router    /api/users/me
//access     Private
const getUser = asyncHandler(async (req, res) => {
  res.status(200).json(req.user);
});

// Generate Jwt
const generateJWT = (id) => {
  return jwt.sign({ id }, process.env.JWT, { expiresIn: '30d' });
};

module.exports = { registerUser, loginUser, getUser };
