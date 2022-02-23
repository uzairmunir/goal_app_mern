const jwt = require('jsonwebtoken');
const User = require('../models/userModel');
const asyncHandler = require('express-async-handler');

const auth = asyncHandler(async (req, res, next) => {
  let token = req.header('auth-token');
  if (token) {
    // Verify token
    try {
      const decoded = jwt.verify(token, process.env.JWT);
      // Get User from token
      req.user = await User.findById(decoded.id).select('-password');
      next();
    } catch (error) {
      return res.status(401).json({ msg: 'Invalid Token' });
    }
  }
  // Check for token
  if (!token) {
    res.status(400).json({ msg: 'Authorization Denied Token Missing' });
  }
});
module.exports = auth;
