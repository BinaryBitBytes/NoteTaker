const notes = require("express").Router();
const { v4: uuidv4 } = require("uuid");
const { readIt, readItUpdateIt, writeIt } = require("../helpers/fsUtil");
const PORT = 3001;
const { notesData } = require("./scripts/notes.js");
//getting the route for sending a response
notes.get("/", (req, res) => {
  readIt("./db/note.json").then((data) => res.json(JSON.parse(data)));
});

notes.get("/:notes_id", (req, res) => {
  const noteId = req.params.notes_id;
  readIt("./db/note.json")
    .then((data) => JSON.parse(data))
    .then((json) => {
      const result = json.filter((note) => note.note_id === noteId);
      return result.length > 0
        ? res.json(result)
        : res.json("No task with that ID");
    });
});

notes.delete("/:notes_id", (req, res) => {
  const noteId = req.params.notes_id;
  readIt("./db/notes.json")
    .then((data) => JSON.parse(data))
    .then((json) => {
      const result = json.filter((note) => note.note_id !== noteId);

      // Save that array to the filesystem
      writeIt("./db/notes.json", result);

      // Respond to the DELETE request
      res.json(`Item ${notesId} has been deleted 🗑️`);
    });
});

notes.post("/", (req, res) => {
  console.log(req.body);

  const { username, note, task } = req.body;

  if (req.body) {
    const newNote = {
      username,
      note,
      task,
      task_id: uuidv4(),
    };

    readItUpdateIt(newNote, "./db/notes.json");
    res.json(`task added successfully 🚀`);
  } else {
    res.error("Error in adding task");
  }
});

module.exports = notes;

// fb.listen(PORT, () =>
//     console.log(`listening locally at http://localhost:${PORT}`)
// );

// fb.get('/api', (req, res) => res.json(noteData));

// fb.post('/', async (req,res) => {
//     try{

//     } catch (err) {
//         res.status(400).json(err);
//     }
// });

// const notes= (userInput) =>
// {
//     let userInput = '';
//     if (filedNote)
//     {
//         while (filedNote)
//         {
//             userInput == '';
//             window.prompt(`User Input is blank, please enter another input.`);
//             continue;
//     };
//     elseif (userInput.wordsEntered <= CharacterData.length(15))
//     {
//         console.log(`You have reached 15 characters, this is
//          to inform you that your note requirement is met and
//          can be submitted.`);

//     };
//     };
// };
// module.exports = {notes}

// //! WILDCARD ^^
