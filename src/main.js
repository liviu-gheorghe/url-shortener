const express = require('express');
const morgan = require('morgan');
const helmet = require('helmet');
require('http-errors');
require('dotenv').config();
const app = express();
const {
    mainRouter
} = require('./routes');

app.use(helmet());
app.use(morgan('combined'));
app.use(express.json());

app.use('/api',mainRouter);

app.use((err,req,res,next) => {


    res.json({
        message: err.message
    });

});

const port = process.env.PORT || 3001;
app.listen(port,() => {
    console.log(`Application is listening on port ${port}`);
})