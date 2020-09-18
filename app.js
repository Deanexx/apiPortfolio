const express = require('express');
const app = express(); // function on calling will add a lot of actions
const emailRouter = require('./routes/emailRouter');

app.use(express.json()); // req.body could be usable

app.use('/api', emailRouter);

module.exports = app;