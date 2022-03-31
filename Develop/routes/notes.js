const express = require('express');
const router = require('express').Router();
const PORT = 3001;
const app = express();
const { noteData } = require('./scripts/notes.js');
//getting the route for sending a response
app.get('/', (req, res) => {
    res.send('http://localhost:3001/api');
  });

app.listen(PORT, () =>
    console.log(`listening locally at http://localhost:${PORT}`)
); 

app.get('/api', (req, res) => res.json(noteData));

router.post('/', async (req,res) => {
    try{

    } catch (err) {
        res.status(400).json(err);
    }
});

const notes= (userInput) =>
{
    let userInput = '';
    for (filedNote)
    {
        while (filedNote) 
        {
            userInputer == '';
            window.prompt(`User Input is blank, please enter another input.`);
            continue;
    };
    if (userInput.wordsEntered <= CharacterData.length(15))
    {
        console.log(`You have reached 15 characters, this is
         to inform you that your note requirement is met and 
         can be submitted.`);

    };
    };
};
module.exports = {notes} 

//! WILDCARD ^^