const express = require('express');


// const index = require('./server');
const notesRouter = require('./notes');
// const taskRouter = require('./task');

const app = express();

// app.use('/server', index);
app.use('/', notesRouter);
// app.use('/task', taskRouter);

module.exports = app;
