const express = require('express');
const {
  registerUser,
  loginUser,
  getUser,
} = require('../controllers/userController');
const auth = require('../middleware/authMiddleware');
const router = express.Router();

router.post('/register', registerUser);
router.post('/login', loginUser);
router.get('/me', auth, getUser);

module.exports = router;
