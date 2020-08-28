const express = require('express');
const app = express();
const morgan = require('morgan');
const config = require('./config')
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const userRout = require('./controller/auth');
mongoose.connect(config.DB, {useNewUrlParser: true, useUnifiedTopology: true});

app.use(morgan('dev'));
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', '*');
    if (req.method === "OPTIONS") {
        req.header('Access-Control-Allow-Method', 'GET, POST, PUT, PATCH');
        return res.status(200).json({
            success: false,
            message: 'don`t access from browser'
        });
    }
    next();
});

/* ---------------------------------------------- *
 *                Handle request                  *
 * ---------------------------------------------- */
app.use(`${config.URL_PATTERN}/auth`, userRout);


/* ---------------------------------------------- *
 *                  Error Handling                *
 * ---------------------------------------------- */
app.use((req, res, next) => {
    const error = new Error('Sorry, the requested URL was not found.');
    error.status = 404;
    next(error);
});

app.use((error, req, res) => {
    // console.log(error.message)
    res.status(error.status || 500);
    res.json({
        success: false,
        message: 'Oops something went wrong',
    });
});

module.exports = app;
