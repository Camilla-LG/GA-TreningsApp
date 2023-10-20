const tasks = [];

function scheduleView() {
    document.getElementById('app').innerHTML = `
        <h2>Dagens timeplan</h2>
        <table>
            <tr>
                <th>Tidspunkt</th>
                <th>Aktivitet</th>
            </tr>
        </table>

        <h2>Legg til oppgave</h2>
        <input type="text" id="taskInput" placeholder="Skriv inn oppgave">
        <input type="time" id="taskTime"> <!-- Legg til tidspunkt-input -->
        <button onclick="addTask()">Legg til oppgave</button>
        <ul id="taskList"></ul>
    `;
}

function addTask() {
    const taskInput = document.getElementById('taskInput');
    const taskTime = document.getElementById('taskTime');
    const taskList = document.getElementById('taskList');

    if (taskInput.value.trim() === '' || taskTime.value === '') {
        alert('Oppgaven og tidspunktet kan ikke være tomme');
        return;
    }

    const task = {
        text: taskInput.value,
        time: taskTime.value,
    };

    tasks.push(task);
    taskInput.value = '';
    taskTime.value = '';
    updateTaskList();
}

function updateTaskList() {
    const taskTable = document.querySelector('table');
    
    tasks.forEach(task => {
        const newRow = taskTable.insertRow(-1); 
        const timeCell = newRow.insertCell(0);
        const activityCell = newRow.insertCell(1);

        timeCell.textContent = task.time;
        activityCell.textContent = task.text;
    });
}

scheduleView();

