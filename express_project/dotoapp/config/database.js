require('dotenv').config();
const mongoose = require('mongoose');


const dbconnect = () => {
    console.log("DATABASE_URL:", process.env.DATABASE_URL); // Log to verify the value
    mongoose.connect(process.env.DATABASE_URL)
        .then(() => {
            console.log('Connection successful');
        })
        .catch((error) => {
            console.log('Connection failed');
            console.error(error.message);
            process.exit(1);
        });
};

module.exports = dbconnect;
