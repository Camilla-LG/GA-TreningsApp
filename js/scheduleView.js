// scheduleWiew();
function scheduleWiew(){
    document.getElementById('app').innerHTML = /*HTML*/`
    <h2>Dagens timeplan</h2>
    <table>
        <tr>
            <th>tidspunkt</th>
            <th>Aktivitet</th>
        </tr>
        <tr>
            <td>08:00 - 09:00</td>
            <td>Morgenmøte</td>
        </tr>
        <tr>
            <td>09:30 - 11:00</td>
            <td>Arbeid til prosjekt</td>
        </tr>
    </table>

    <h2>Legg til oppgave</h2>
    <input type="text" id="taskInput" placeHolder="Skriv inn oppgave">
    <button onclick="addTask()">Legg til oppgave</button>
    <ul id="taskList"></ul>
    `;
}

function addTask(){
    const taskInput = document.getElementById('taskInput');
    const taskList = document.getElementById('tasklist');

    if (taskInput.value.trim() === ''){
        alert('Oppgaven kan ikke være tom');
        return;
    }
    const task = document.createElement('li');
    task.textContent = textInput.value;
    taskList.appendChild(task);
    taskInput.value = '';
}