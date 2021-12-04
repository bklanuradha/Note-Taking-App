// variables
var form = document.getElementById('add-frm');
var items = document.getElementById('items');
var ntitle = document.getElementById('n-title');
var nbody = document.getElementById('n-body');
var tableDiv = document.getElementById('tbl-div');
var search = document.getElementById('srch');

var noteCount = 0;
var newNote = '';

// events
// for page loads
window.onload = updateTable;

form.addEventListener('submit', addNote);

// for search
search,addEventListener('keyup', searchNotes)

// functions

// update table
function updateTable(){
    // Display the table when notes get added
    if (noteCount > 0){
        tableDiv.style.display = '';
        items.appendChild(newNote);
    }
    else{
        tableDiv.style.display = 'none';
    }
}

// Add note
function addNote(e){
    // stop initial behaviour
    e.preventDefault();
    
    // validate inputs
    if(ntitle.value == '' || nbody.value == ''){
        alert("Please fill all fields!");
    }else{
        // create a new note record

        // New tr
        var tr = document.createElement('tr');
        tr.className = 'item';

        // New td for title and body
        var td1 = document.createElement('td');
        td1.appendChild(document.createTextNode(ntitle.value));
        var span = document.createElement('span');
        span.className = 'note-body';
        span.appendChild(document.createTextNode(nbody.value));
        td1.appendChild(span);

        // New td for view
        var td2 = document.createElement('td');
        td2.className = 'btcellv';
        var btn1 = document.createElement('button');
        btn1.appendChild(document.createTextNode('View'));
        btn1.setAttribute('id', 'vw');
        td2.appendChild(btn1);

        // New td for delete
        var td3 = document.createElement('td');
        td3.className = 'btcelld';
        var btn2 = document.createElement('button');
        btn2.appendChild(document.createTextNode('Delete'));
        btn2.setAttribute('id', 'del');
        td3.appendChild(btn2);

        // Add all tds to tr
        tr.appendChild(td1);
        tr.appendChild(td2);
        tr.appendChild(td3);

        // Increment note count
        noteCount++;

        // Set New Note
        newNote = tr;

        // Add or update the note of the table
        updateTable();


    }
}

// Search notes
function searchNotes(e){
    
}