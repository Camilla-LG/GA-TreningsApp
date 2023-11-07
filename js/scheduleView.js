function scheduleView() {
    document.getElementById('app').innerHTML =/*HTML*/ `
        <button onclick="mainPage()">X</button>
        <h1>Treningsplan</h1>
        <label for="daySelector">Velg en dag: </label>
        <select id="daySelector">
            <option value="Mandag">Mandag</option>
            <option value="Tirsdag">Tirsdag</option>
            <option value="Onsdag">Onsdag</option>
            <option value="Torsdag">Torsdag</option>
            <option value="Fredag">Fredag</option>
            <option value="Lørdag">Lørdag</option>
            <option value="Søndag">Søndag</option>
        </select>
        <label> Øvelse: </label> <input type="text" id="taskInput" placeholder="Legg til øvelse...">
        <label> Antall set: </label> <input type="number" min="0" max="12" id="setCount">
        <label> Antall reps: </label> <input type="number" min="0" max="12" id="repCount">
        <button onclick="addTask()">Legg til</button>
    
        <h2>Ukeplan</h2>
        <table border="1">
            <tr id="dateRow">
                <th>Mandag</th>
                <th>Tirsdag</th>
                <th>Onsdag</th>
                <th>Torsdag</th>
                <th>Fredag</th>
                <th>Lørdag</th>
                <th>Søndag</th>
            </tr>
            <tr id="taskRow">
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
            </tr>
        </table>
        `;
    populateDateSelector(); 
    selectDateOption();
}

// function addTask() {
//     const taskInput = document.getElementById('taskInput');
//     const setCount = document.getElementById('setCount');
//     const repCount = document.getElementById('repCount');
//     const taskTime = document.getElementById('taskTime');


//     if (taskInput.value.trim() === '' || taskTime.value === '' || repCount.value === '' || setCount.value === '') {
//         alert('Øvelse, dato, tidspunkt og antall sett kan ikke være tomme');
//         return;
//     }

//     let task = {
//         time: taskTime.value,
//         workout: taskInput.value,
//         log: '',
//         set: setCount.value,
//         rep: repCount.value,
//     };

//     model.input.schedule.task.push(task);
//     repCount.value = '';
//     taskInput.value = '';
//     setCount.value = '';
//     taskTime.value = '';
//     scheduleView()
// }

function addTask(){
    const taskInput = document.getElementById('taskInput');
    const setInput = document.getElementById('setCount');
    const repInput = document.getElementById('repCount');
    const selectedDay = document.getElementById('daySelector').value;
    const taskRow = document.getElementById('taskRow');
    const dateRow = document.getElementById('dateRow');
    const dateCells = dateRow.cells;
    const taskCells = taskRow.cells;

    for (let i = 0; i < dateCells.length; i++) {
        if (dateCells[i].textContent == selectedDay) {
            let html = /*HTML*/`
                <li>Øvelse:${taskInput.value}</li>
                <div>Antall set:${setInput.value} Antall reps:${repInput.value}</div>
            `;
            const taskCell = taskCells[i];
            const task = taskCell.textContent.split('\n');
            task.push(html);
            taskCell.textContent = task.join('\n');
            break;
        }
    }
}

            
    // const taskInput = document.getElementById('taskInput');
    // const setCount = document.getElementById('setCount');
    // const repCount = document.getElementById('repCount');
    // const taskTime = document.getElementById('taskTime');
    // const selectedDay = document.getElementById('daySelector').value;
    // const selectedDay = new Date(selectedDate.value);
    // const dayOfWeek = selectedDay.toLocaleDateString(undefined, options).toLowerCase();
    // const options = { weekday: 'long' };

    // const dateRow = document.getElementById('dateRow');
    // const taskRow = document.getElementById('taskRow');
    // const dateCells = dateRow.cells;
    // const taskCells = taskRow.cells;


    // for (let i = 0; i < dateCells.length; i++) {
    //     if (dateCells[i].textContent == dayOfWeek) {
    //         const cell = taskCells[i];
    //         const events = cell.textContent.split('\n');
    //         events.push(taskInput.value);
    //         cell.textContent = events.join('\n');

            // const div = document.createElement('div');
            // div.textContent = `${taskInput.value}, Tid: ${taskTime.value}, Sett: ${setCount.value}, Reps: ${repCount.value}`;
            // div.style.margin = '5px';

            // taskCell.appendChild(div);

//             repCount.value = '';
//             taskInput.value = '';
//             setCount.value = '';
//             taskTime.value = '';
//             break; // Avslutt løkken når riktig dag er funnet
//         }
//     }
// }



function updateTaskList() {
    let html = '';
    for (let i = 0; i < model.input.schedule.task.length; i++) {
        html += /*HTML*/`
        <div style="display:flex;flex-direction:row;">
            <div style="border:solid 1px; width:40px; padding:10px; padding-top:-5px; padding-bottom:-5px; ">${model.input.schedule.task[i].time}</div>
            <div style="border:solid 1px; width:60px; padding:10px; padding-top:-5px; padding-bottom:-5px; overflow:auto; ">${model.input.schedule.task[i].workout}</div>
            <div style="border:solid 1px; width:30px; padding:10px; padding-top:-5px; padding-bottom:-5px; ">${model.input.schedule.task[i].set}</div>
            <div style="border:solid 1px; width:30px; padding:10px; padding-top:-5px; padding-bottom:-5px; ">${model.input.schedule.task[i].rep}</div>
        </div>
        `;
    }
    return html;
}

// OBS OBS! Ligger her midlertidig til vi har løst kommunikasjon mellom sidene

function selectDateOption() {
    const selectedDateFormat = document.getElementById("dateFormat").value;
    const dateRow = document.getElementById("dateRow");
    const today = new Date();
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    const optionsNum = {weekday:'long', day: 'numeric', month: 'numeric'}
    let chosenDateFormat = "text";


    for (let i = 0; i < 7; i++) {
        const dayDate = new Date(today);
        dayDate.setDate(today.getDate() + i);


        if (selectedDateFormat == "numeric") {
            chosenDateFormat = dayDate.toLocaleDateString(undefined, optionsNum);
        } else if (selectedDateFormat == "text") {
            chosenDateFormat = dayDate.toLocaleDateString(undefined, options);
        }

        const celle = dateRow.cells[i];
        celle.textContent = chosenDateFormat;
    }
}

function populateDateSelector() {
    const dateSelector = document.getElementById("dateSelector");
    const today = new Date();

    for (let i = 0; i < 7; i++) {
        const optionDate = new Date(today);
        optionDate.setDate(today.getDate() + i);

        const option = document.createElement("option");
        const options = {weekday: 'long', day: '2-digit', month: '2-digit'};
        option.value = optionDate.toISOString().split("T")[0];
        option.textContent = optionDate.toLocaleDateString(undefined, options); 
        dateSelector.appendChild(option);
    }

    // Sett standardverdien til dagens dato
    const todayISO = today.toISOString().split("T")[0];
    dateSelector.value = todayISO;
}


function showFeedback(){
   alert("Sterkt jobba!");
}
