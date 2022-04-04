const { readIt } = require('../helpers/fsUtil');
//! REMEBER CRUD OPERATION
//! CREATE
//! READ
//! UPDATE
//! DELETE
const task = require('express').Router();

const {
    readIt,
    writeIt,
    readItUpdateIt
} = require('../helpers/fsUtil.js');

//GET Route for all tasks
task.get('/', (req, res) => {
    fs.readIt('./db/db.json').then((data) => res.json(JSON.parse(data)));
});

// GET Route for a specific task
task.get('/:task_id', (req,res) => {
    const taskId = req.params.task_id;
    readIt('./db/db.json')
        .then((data) => JSON.parse(data))
        .then((json) => {
            const result = json.filter((task) => task.task_id === taskId);
            return result.length > 0
                ? res.json(result)
                : res.json('There are no tasks with this ID')
        });
});

// DELETE route for the task
task.delete('/:task_id', (req, res) => {
    const taskId = req.params.task_id;
    readFromFile('./db/db.json')
        .then((data) => JSON.parse(data))
        .then((json) => {
            const result = json.filter((task) => task.task_id !== taskId);

            writeIt('./db/db.json', result);

            res.json(`Task ${taskId} is now deleted.`);
        });
});

// Post route for the new task
task.post('/', (req,res) => {
    console.log(req.body);
    const
})

exports.taskData = taskData; 