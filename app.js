const express = require('express');
const app = express(); // function on calling will add a lot of actions
const emailRouter = require('./routes/emailRouter');

app.use(express.json()); // req.body could be usable
app.use(function(req, res, next){
    res.header("Access-Control-Allow-Origin", "http://localhost:8080"); // update to match the domain you will make the request from
    next();
})
app.use('/api', emailRouter);

module.exports = app;