// server.js
const express = require('express');
const connectDB = require('./config/db');
const bodyParser = require('body-parser');
const auth = require('./routes/auth');

const app = express();

// Connect to MongoDB
connectDB();

// Middleware
app.use(bodyParser.json());

// Routes
app.use('/api/auth', auth);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
