const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');
require('dotenv').config();
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