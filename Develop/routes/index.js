{index.js} = require('../server');

const express = require('express');

const notesRouter = require('./notes');
const taskRouter = require('./task');

const app = express();

app.use('/notes', notesRouter);
app.use('/task', taskRouter);

module.exports = app;
exports.{index.js};