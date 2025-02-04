require('dotenv').config();
const dbconnection = require('./config/database');

const express = require('express');

const blog = require('./route/routes');

const app = express();

app.use(express.json());

const PORT = process.env.PORT || 4000;



 app.use('/api/v2',blog);

app.listen(PORT, () => {
    console.log(`server started at ${PORT}`);

});
dbconnection();




