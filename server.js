// dependancy for express
const express = require('express');
const path = require('path');
const { midWare } = require('./middleware/midWare');
// making a route that points to index.js
const api = ('/routes/index.js');

const PORT = 3001; // process.env.PORT || 

const app = express();
app.use(midWare);
app.use(express.static('public')); //! express.static('public')//creating a static rout for the public folder

//console.log(app.use(midWare));

app.use(express.json()); //using express and parsing the contents into a JSON object
app.use(express.urlencoded({ extended: true }));
// app.use('/api', api);


//app.use('routes', route);

app.get('/', (req, res) => 
  res.sendFile(path.join(__dirname, '/public/index.html'))
  );
//get route for notes.html
app.get('/notes', (req, res) => 
  res.sendFile(path.join(__dirname, '/public/notes.html'))
  );

app.get('*', (req, res) =>
  res.sendFile(path.join(__dirname, 'public/pages/404.html'))
  );

app.listen(PORT, () =>
console.log(`Listening for requests at http://localhost:${PORT} 🏎️`)
  );
  // app.post('/', (req, res) => res.json(`POST route`));
  // app.put('/:id', (req, res) => res.json(`PUT route`));
  // app.delete('/:id', (req, res) => res.json(`DELETE route`));
  // app.patch('/:id', (req, res) => res.json(`PATCH route`));
//Building out the Middleware for our JSON and data
//app.use(express.urlencoded({ extended: true}));


