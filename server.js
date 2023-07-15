const express = require('express');
const app = express();
const dotenv = require('dotenv').config();
const PORT = process.env.PORT || 3500;

const productRouter = require('./Routes/products');

app.use(express.json());
app.use(express.urlencoded({extended:true}));

require("./initDB")();

app.use('/api/product', productRouter);

app.all('*', (req, res, next) => {
    const err = new Error("Not Found");
    err.status = 404;
    next(err);
});

app.use((err, req, res, next) => {
    res.status( err.status || 500);
    res.send({
        Error : {
            Status : err.status || 500,
            message : err.message
        }
    });
});

app.listen(PORT, () => { console.log(`Server running on port ${PORT}.....`) });