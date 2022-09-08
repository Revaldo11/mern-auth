const express = require('express');
const morgan = require('morgan'); // logging
const mongoose = require('mongoose');
const cors = require('cors'); // cross origin resource sharing
const bodyParser = require('body-parser'); // parse incoming request bodies in a middleware before your handlers
require('dotenv').config(); // load environment variables from a .env file into process.env
const app = express();
const authRoutes = require('./routes/auth');

// app middlewares
app.use(morgan('dev'));
app.use(bodyParser.json());
// app.use(cors()); // allows us to make request from frontend to backend
if (process.env.NODE_ENV = 'development') {
    app.use(cors({ origin: 'http://localhost:3000' }));
}

// middleware
app.use('/api', authRoutes);

const port = process.env.PORT || 8000;

app.listen(port, () => {
    console.log(`API is running on port ${port} - ${process.env.NODE_ENV}`);
});