const task = require("express").Router();
const { v4: uuidv4 } = require("uuid");
const { readIt, readItUpdateIt, writeIt } = require("../helpers/fsUtil");
const PORT = 3001;
const { noteData } = require("./scripts/notes.js");
//getting the route for sending a response
task.get("/", (req, res) => {
  readIt("./db/task.json").then((data) => res.json(JSON.parse(data)));
});
// fb.get('/', (req, res) => {
//     res.send('http://localhost:3001/api');
//   });
task.get("/:task_id", (req, res) => {
  const taskId = req.params.task_id;
  readIt("./db/task.json")
    .then((data) => JSON.parse(data))
    .then((json) => {
      const result = json.filter((task) => task.task_id === taskId);
      return result.length > 0
        ? res.json(result)
        : res.json("No task with that ID");
    });
});

task.delete("/:task_id", (req, res) => {
  const taskId = req.params.task_id;
  readIt("./db/task.json")
    .then((data) => JSON.parse(data))
    .then((json) => {
      const result = json.filter((task) => task.task_id !== taskId);

      // Save that array to the filesystem
      writeIt("./db/task.json", result);

      // Respond to the DELETE request
      res.json(`Item ${taskId} has been deleted 🗑️`);
    });
});

task.post("/", (req, res) => {
  console.log(req.body);

  const { username, note, task } = req.body;

  if (req.body) {
    const newTask = {
      username,
      note,
      task,
      task_id: uuidv4(),
    };

    readItUpdateIt(newTask, "./db/task.json");
    res.json(`task added successfully 🚀`);
  } else {
    res.error("Error in adding task");
  }
});

module.exports = task;

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
