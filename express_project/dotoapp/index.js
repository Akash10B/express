// Load config from .env file
require('dotenv').config();
const express = require('express');
const app = express();

const todoRoutes = require('./routes/todoRoute');



const PORT = process.env.PORT || 4000;
app.use(express.json());

// Mount the todo API route
app.use('/api/v2', todoRoutes);

// Start server
app.listen(PORT, () => {

    console.log(`Server started at ${PORT}`);
});

// database connection
const dbconnect = require('./config/database');
dbconnect();

