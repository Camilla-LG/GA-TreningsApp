function scheduleView() {
    document.getElementById('app').innerHTML =/*HTML*/ `
        <button onclick="mainPage()">X</button>
        <h2>Dagens timeplan</h2>
        <table>
            <tr>
                <th>Time</th>
                <th>Workout</th>
                <th>Sets</th>
                <th>Reps</th>
                </tr>
                </table>
                ${updateTaskList()}

        <h2>Legg til økt</h2>
        <input type="text" id="taskInput" placeholder="Skriv inn øvelse">
        <input style="width:80px;" type="number" id="setCount" placeholder="Antall sett">
        <input style="width:80px;" type="number" id="repCount" placeholder="Antall reps"> <!-- Legg til dato-input -->
        <input type="time" id="taskTime"> <!-- Legg til tidspunkt-input -->
        <button onclick="addTask()">Legg til økt</button>
        <button onclick="finishDay('sch')">End day</button>
        <ul id="taskList"></ul>
    `;
}
function addTask() {
    const taskInput = document.getElementById('taskInput');
    const setCount = document.getElementById('setCount');
    const repCount = document.getElementById('repCount');
    const taskTime = document.getElementById('taskTime');


    if (taskInput.value.trim() === '' || taskTime.value === '' || repCount.value === '' || setCount.value === '') {
        alert('Øvelse, dato, tidspunkt og antall sett kan ikke være tomme');
        return;
    }

    let task = {
        time: taskTime.value,
        workout: taskInput.value,
        log: '',
        set: setCount.value,
        rep: repCount.value,
    };

    model.input.schedule.task.push(task);
    repCount.value = '';
    taskInput.value = '';
    setCount.value = '';
    taskTime.value = '';
    scheduleView()
}

function updateTaskList() {
    let html = '';
    for (let i = 0; i < model.input.schedule.task.length; i++) {
        html += /*HTML*/`
        <div style="display:flex;flex-direction:row;">
            <div style="margin-left:10px;">${model.input.schedule.task[i].time}</div>
            <div style="margin-left:10px;">${model.input.schedule.task[i].workout}</div>
            <div style="margin-left:10px;">${model.input.schedule.task[i].set}</div>
            <div style="margin-left:10px;">${model.input.schedule.task[i].rep}</div>
        </div>
        `;
    }
    return html;
}
