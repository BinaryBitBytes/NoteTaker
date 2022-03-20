import midWare from "./middleware" ;
// dependancy for express
const express = require('express');
const path = require('path');
// dependancy for  FS for saving files
const fs = require('fs');
// making a route that points to index.js
const route = ('./routes/index.js');
const { midWare } = require('./middleware/midWare');

//communication port 3001 for local host
const PORT = 3001;
// using express as a function
const applet = express();
app.use(midWare);

const middleware = (req, res, next) => {
    // ANSI escape code that instructs the terminal to print in yellow
    const yellow = '\x1b[33m%s\x1b[0m';
    // Log out the request type and resource
    console.log(yellow, `${req.method} request to ${req.path}`);
    // Built-in express method to call the next middleware in the stack.
    next();
  };
app.use(middleware);
app.get('/', (req, res) => res.json(`GET route`));
app.post('/', (req, res) => res.json(`POST route`));
app.put('/:id', (req, res) => res.json(`PUT route`));
app.delete('/:id', (req, res) => res.json(`DELETE route`));
app.patch('/:id', (req, res) => res.json(`PATCH route`));
app.listen(PORT, () =>
  console.log(`Listening for requests on port ${PORT}! 🏎️`)
);

//Building out the Middleware for our JSON and data
app.use(express.json()); //using express and parsing the contents into a JSON object
//app.use(express.urlencoded({ extended: true}));
app.use('api', applet);
console.log(``);
app.use(express.static('public')); //creating a static rout for the public folder

// GET THE ROUTE for our main page
app.get('/', (req, res) =>
    res.sendFile(path.join(__dirname, '/public/index.html'))
);

//Getting the route for the notes page
app.get('/notes', (req, res) =>
    res.sendFile(path.join(__dirname, '/public/notes.html'))
);

app.listen(PORT, () =>
    console.log(`App listening at http://localhost:${PORT} 🚀`)
);
