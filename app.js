const express = require('express');
const app = express(); // function on calling will add a lot of actions
const AppError = require('./utils/appError');
const globalErrorHandler = require('./controllers/errorController');
const emailRouter = require('./routes/emailRouter');

app.use(express.json()); // req.body could be usable
app.use(function(req, res, next){
    res.header("Access-Control-Allow-Origin", "http://localhost:8080"); // update to match the domain you will make the request from
    next();
})

app.use('/api', emailRouter);
app.all('*', (req, res, next) => {
    next(new AppError(`Can't find ${req.originalUrl} on this Server, oooops :P`, 404))
})

app.use(globalErrorHandler); //whenever Error happens we get directed here
module.exports = app;