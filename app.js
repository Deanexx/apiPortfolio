const express = require('express');
const cors = require('cors');
const app = express(); // function on calling will add a lot of actions
const AppError = require('./utils/appError');
const globalErrorHandler = require('./controllers/errorController');
const emailRouter = require('./routes/emailRouter');

app.use(express.json()); // req.body could be usable
app.use(cors({
    origin: 'http://www.eldartailov.com',
    optionsSuccessStatus: 200
}))

app.use('/api', emailRouter);
app.all('*', (req, res, next) => {
    next(new AppError(`Can't find ${req.originalUrl} on this Server, oooops :P`, 404))
})

app.use(globalErrorHandler); //whenever Error happens we get directed here
module.exports = app;