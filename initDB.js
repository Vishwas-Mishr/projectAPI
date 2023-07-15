const mongoose = require('mongoose');
const dotenv = require('dotenv').config();

module.exports = async () => {
    const optionsDB = {
        dbname:process.env.DB_NAME,
        user:process.env.DB_USERNAME,
        pass:process.env.DB_PASS,
        useNewUrlParser : true
    };
    const URI = process.env.DB_URI;
    try {
        await mongoose.connect(URI, optionsDB);
        console.log("Connection established with database.....");
        //console.log(optionsDB);
    } catch(error) {
        console.error(error);
    }
    process.on("SIGINT", () => {
        mongoose.connection.close(false);
        console.log("Connection with database terminated.....");
        process.exit(0);
    });
};
