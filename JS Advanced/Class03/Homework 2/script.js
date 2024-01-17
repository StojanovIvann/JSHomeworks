let titleInput = document.getElementById('title');
let priorityInput = document.getElementById('priority');
let colorInput = document.getElementById('color')
let descriptionInput = document.getElementById('desc');
let addBtn = document.getElementById('addReminder');
let showBtn = document.getElementById('showAllReminders');
let tableDiv = document.getElementById('table');

let arrayOfReminders = [];

function addReminder() {
    let reminderObject = {
        title: titleInput.value,
        priority: priorityInput.value,
        color: colorInput.value,
        description: descriptionInput.value
    };
    console.log(reminderObject);
    arrayOfReminders.push(reminderObject);
    console.log(arrayOfReminders);
}

addBtn.addEventListener('click', function () {
    addReminder();
});

function createTable() {
    let table = `<table border="2px">
        <tr>
            <th>Title</th>
            <th>Priority</th>
            <th>Description</th>
        </tr>`;

    for (let i = 0; i < arrayOfReminders.length; i++) {
  
        table += '<tr>';
        table += `<td style="background-color: ${arrayOfReminders[i].color}">${arrayOfReminders[i].title}</td>`;
        table += `<td>${arrayOfReminders[i].priority}</td>`;
        table += `<td>${arrayOfReminders[i].description}</td>`;
        table += '</tr>';
    }
    table += '</table>'
    tableDiv.innerHTML =  table;
}

showBtn.addEventListener('click', function () {
    createTable();
});

