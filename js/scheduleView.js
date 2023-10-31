let tasks = [];

function scheduleView() {
    document.getElementById('app').innerHTML =/*HTML*/ `
        <button onclick="mainPage()">X</button>
        <h2>Dagens timeplan</h2>
        <table>
            <tr>
                <th>Dato</th>
                <th>Tidspunkt</th>
                <th>Aktivitet</th>
                <th>Antall sett</th>
            </tr>
        </table>

        <h2>Legg til økt</h2>
        <input type="text" id="taskInput" placeholder="Skriv inn øvelse">
        <input style="width:80px;" type="number" id="setCount" placeholder="Antall sett">
        <input style="width:80px;" type="number" id="repCount" placeholder="Antall reps"> <!-- Legg til dato-input -->
        <input type="time" id="taskTime"> <!-- Legg til tidspunkt-input -->
        <button onclick="addTask()">Legg til økt</button>
        <button onclick="finishDay()">End day</button>
        <ul id="taskList"></ul>
    `;
}
function addTask() {
    const taskInput = document.getElementById('taskInput');
    const setCount = document.getElementById('setCount');
    const repCount = document.getElementById('repCount');
    const taskTime = document.getElementById('taskTime');
    const taskList = document.getElementById('taskList');

    if (taskInput.value.trim() === '' || taskTime.value === '' || repCount.value === '' || setCount.value === '') {
        alert('Øvelse, dato, tidspunkt og antall sett kan ikke være tomme');
        return;
    }

    let task = {
        time: taskTime.value,
        workout: taskInput.value,
        log:'',
        set: setCount.value,
        rep: repCount.value,
    };

    tasks.push(task);
    repCount.value = '';
    taskInput.value = '';
    setCount.value = '';
    taskTime.value = '';
    updateTaskList();
}

function updateTaskList() {
    const taskTable = document.querySelector('table');
    let html = '';
    for (let i = 0; i < tasks.length; i++) {
        html += /*HTML*/`
        <div style="display:flex;flex-direction:row;">
            <div style="margin-left:10px;">Tid: ${tasks[i].time}</div>
            <div style="margin-left:10px;">Workout: ${tasks[i].workout}</div>
            <div style="margin-left:10px;">Set: ${tasks[i].set}</div>
            <div style="margin-left:10px;">Rep: ${tasks[i].rep}</div>
        </div>
        `;
    }
    taskTable.innerHTML = html;
}
