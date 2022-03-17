const noteField = document.getElementsByClassName('container-fluid');
const taskField = document.getElementsByClassName('col-8');

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
    theCardHeader.innerHTML = `${note.theTask} </br>`;
    const theCardBody = document.createElement('div');
    theCardBody.classList.add('note-body', '' , '');
    theCardBody.innerHTML = `<p>${note.note}</p>`;
}