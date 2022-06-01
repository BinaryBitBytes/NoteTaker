const notes = require("express").Router();
const { v4: uuidv4 } = require("uuid");
const { readIt, readItUpdateIt, writeIt } = require("../helpers/fsUtil");
const PORT = 3001;
const { notesData } = require("./scripts/notes.js");
//getting the route for sending a response
notes.get("/notes", (req, res) => {
  readIt("./db/db.json").then((data) => res.json(JSON.parse(data)));
});

notes.get("/:notes", (req, res) => {
  const noteId = req.params.notes_id;
  readIt("./db/db.json")
    .then((data) => JSON.parse(data))
    .then((json) => {
      const result = json.filter((note) => note.note_id === noteId);
      return result.length > 0
        ? res.json(result)
        : res.json("No task with that ID");
    });
});

notes.post("/notes", (req, res) => {
  console.log(req.body);
  const { note, task } = req.body;
  if (req.body) {
    const newNote = {
      note,
      task,
      task_id: uuidv4(),
    };

    readItUpdateIt(newNote, "./db/db.json");
    const response = {
      status: 'success',
      body: newNote,
      };

    res.json(response);
  } else {
    res.error("Error in adding task");
  }
});
notes.delete("/:notes_id", (req, res) => {
  const noteId = req.params.id;
  readIt("./db/db.json")
    .then((data) => JSON.parse(data))
    .then((json) => {
      const result = json.filter((note) => note.note_id !== noteId);

      // Save that array to the filesystem
      writeIt("./db/db.json", result);

      // Respond to the DELETE request
      res.json(`Item ${notesId} has been deleted 🗑️`);
    });
});


module.exports = notes;
