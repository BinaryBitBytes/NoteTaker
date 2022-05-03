const noteField = document.getElementsByClassName('container-fluid');
const taskField = document.getElementsByClassName('col-8');

fbBtn.addEventListener('click', (e) => {
    e.preventDefault();
    window.location.href = '/notes';
  });

const createCard = (note)=> {
    //creating a note card
    const theCard = document.createElement('div');
    theCard.classList.add('note-title','a1');
    theCard.setAttribute('key', note.note_id);

    // making the header for the card
    const theCardHeader = document.createElement('H3');
    theCardHeader.classList.add(
        'note-title',
        'background',
        'text',
    );
    theCardHeader.innerHTML = `${note.task} </br>`;
    
    const theCardBody = document.createElement('div');
    theCardBody.classList.add('note-body', '' , '');
    theCardBody.innerHTML = `<p>${note.note}</p>`;

    theCardBody.appendChild(cardHeaderEl);
    theCardBody.appendChild(cardBodyEl);
    taskContainer.appendChild(cardEl)
};

const getTasks = () =>
  fetch('/api/task', {
    method: 'GET', // or 'PUT'
    headers: {
      'Content-Type': 'application/json',
    },
    // body: JSON.stringify(data),
  })
    .then((response) => response.json())
    .then((data) => data)
    .catch((error) => {
      console.error('Error:', error);
    });

    const postTasks = (task) =>
  fetch('/api/task', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(task),
  })
    .then((response) => response.json())
    .then((data) => {
      alert(data);
      createCard(task);
    })
    .catch((error) => {
      console.error('Error:', error);
    });

getTasks().then((data) => data.forEach((task) => createCard(task)));

const validateTask = (newTask) => {
    const { username, task, note } = newTask;
  
    // Object to hold our error messages until we are ready to return
    const errorState = {
      username: '',
      task: '',
      note: '',
    };
  
    // Bool value if the username is valid
    const userTest = username.length >= 4;
    if (!userTest) {
      errorState.username = 'Invalid username!';
    }
  
    // Bool value to see if the tip being added is at least 15 characters long
    const taskCheck = tip.length > 15;
    if (!taskCheck) {
      errorState.task = 'Tip must be at least 15 characters';
    }
  
    // Bool value to see if the topic is either UX or UI
    const noteCheck = topic.includes('UX' || 'UI');
    if (!noteCheck) {
      errorState.task = 'Topic not relevant to UX or UI';
    }
  
    const result = {
      isValid: !!(userTest && taskCheck && noteCheck),
      errors: errorState,
    };
  
    // Return result object with a isValid boolean and an errors object for any errors that may exist
    return result;
  };

const showErrors = (errorObj) => {
    const errors = Object.values(errorObj);
    errors.forEach((error) => {
        if (error.length > 0) {
        alert(error);
        }
    });
};

//! need to route this in the scripts
const submitDiagnostics = (submissionObj) => {
    fetch('/api/diagnostics', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(submissionObj),
    })
      .then((response) => response.json())
      .then(() => showErrors(submissionObj.errors))
      .catch((error) => {
        console.error('Error:', error);
      });
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    console.log('Form submit invoked');
  
    // Get the value of the tip and save it to a variable
    const taskContent = document.getElementById('taskText').value;
  
    // get the value of the username and save it to a variable
    const taskUsername = document.getElementById('taskUsername').value.trim();
  
    // Create an object with the tip and username
    const newTask = {
      username: taskUsername,
      topic: 'UX',
      task: taskContent,
    };
  
    // Run the tip object through our validator function
    const submission = validateTask(newTask);
  
    // If the submission is valid, post the tip. Otherwise, handle the errors.
    return submission.isValid ? postTasks(newTask) : submitDiagnostics(submission);
  };

taskForm.addEventListener('submit', handleFormSubmit);

  
  