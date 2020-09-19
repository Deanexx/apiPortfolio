const express = require('express');
const compression = require('compression');
const app = express(); // function on calling will add a lot of actions
const emailRouter = require('./routes/emailRouter');

app.use(express.json()); // req.body could be usable
app.use(function(req, res, next){
    res.header("Access-Control-Allow-Origin", "localhost.TLD"); // update to match the domain you will make the request from
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
})
app.use('/api', emailRouter);

module.exports = app;