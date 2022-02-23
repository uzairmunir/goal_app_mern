const express = require('express');
const dotenv = require('dotenv').config();
const app = express();
const connectDB = require('./config/db');

const PORT = process.env.PORT || 5000;
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//Routes
app.use('/api/goals/', require('./routes/goalRoutes'));
app.use('/api/users/', require('./routes/userRoutes'));

// Connect to DB
connectDB();
// Listen to server
app.listen(PORT, () => console.log(`server is running on ${PORT}`));
