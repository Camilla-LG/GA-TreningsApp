
function scheduleView() {
    document.getElementById('app').innerHTML =/*HTML*/ `
        <button onclick="mainPage()">X</button>
        <h2>Dagens timeplan</h2>
      

        <h2>Legg til økt</h2>
        <input type="text" id="taskInput" placeholder="Skriv inn øvelse">
        <input style="width:80px;" type="number" min="0" max="12" id="setCount" placeholder="Antall sett">
        <input style="width:80px;" type="number" min="0" max="100" id="repCount" placeholder="Antall reps"> <!-- Legg til dato-input -->
        <input type="time" id="taskTime"> <!-- Legg til tidspunkt-input -->
        <input type="date" id="taskDate">
        <button onclick="addTask()">Legg til økt</button>
        <button onclick="finishDay('sch')">End day</button>
        <ul id="taskList"></ul>
        
        <div>Ukeplan</div> 
        <table border="1">
        <tr id="rowOfDates">
        <th></th>
        <th></th>
        <th></th>
        <th></th>
        <th></th>
        <th></th>
        <th></th>
        </tr>
        <tr>
        <td>${updateTaskList()}</td>
        <td>trening</td>
        <td>fri</td>
        <td>trening</td>
        <td>trening</td>
        <td>fri</td>
        <td>fri</td>
        </tr>
        </table>
        
 <!-- OBS OBS! Denne ligger her foreløpig slik at vi ser at det fungerer,
  da den ikke vil knytte seg opp mot function og select i settingsControl.view -->      
        <select id="dateFormat" onchange="selectDateOption()">
        <option value="numeric">DD/MM/YYYY</option>
        <option value="text">Day, Month, Year</option>
        </select>
 
        `;
        selectDateOption();
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

// OBS OBS! Ligge her midlertidig til vi har løst kommunikasjon mellom sidene

function selectDateOption() {
    const selectedDateFormat = document.getElementById("dateFormat").value;
    const rowOfDates = document.getElementById("rowOfDates");
    const today = new Date();
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    let chosenDateFormat = "text";


    for (let i = 0; i < 7; i++) {
        const dayDate = new Date(today);
        dayDate.setDate(today.getDate() + i);


        if (selectedDateFormat === "numeric") {
            chosenDateFormat = dayDate.toLocaleDateString();
        } else if (selectedDateFormat === "text") {
            chosenDateFormat = dayDate.toLocaleDateString(undefined, options);
        }

        const celle = rowOfDates.cells[i];
        celle.textContent = chosenDateFormat;
    }
}



