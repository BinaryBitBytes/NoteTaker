// dependancy for express
const express = require('express');
// dependancy for  FS for saving files
const fs = require('fs');
// making a route that points to index.js
const route = ('./routes/index.js');

//communication port 3001 for local host
const PORT = 3001;
// using express as a function
const applet = express();

//Building out the Middleware for our JSON and data
app.use(express.json()); //using express and parsing the contents into a JSON object
//app.use(express.urlencoded({ extended: true}));
app.use('api', applet);

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
