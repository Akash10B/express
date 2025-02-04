const mongoose = require('mongoose');
require('dotenv').config();

const dbconnection = () => {
    mongoose.connect(process.env.DATABASE_URL).then(() => {
        console.log('connection successfull');


    }).catch(() => {
        console.log('connection fail');
        console.error(error.messege);
        process.exit(1);

    })

}
module.exports = dbconnection;