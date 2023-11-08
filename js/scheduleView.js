function scheduleView() {
    document.getElementById('app').innerHTML =/*HTML*/ `
        <button onclick="mainPage()">X</button>
        <span class="wikiSpan">Hovedside</span>
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

}



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
                * Øvelse:${taskInput.value}
                Antall set:${setInput.value} Antall reps:${repInput.value}
            `;
            const taskCell = taskCells[i];
            const task = taskCell.textContent.split('\n');
            task.push(html);
            taskCell.textContent = task.join('\n');
            break;
        }
        
    let task = [{
        time:'',
        workout: taskInput.value,
        log:'',
        set: setInput.value,
        rep: repInput.value,
    }];

    model.app.loggedInUser.schedule.task.push(task);
    }
    updateTaskList();
}

function updateTaskList() {
    let html = '';
    for (let i = 0; i < model.input.schedule.task.length; i++) {
        html += /*HTML*/`
        <div style="display:flex;flex-direction:row;">
            <div style="border:solid 1px; width:60px; padding:10px; padding-top:-5px; padding-bottom:-5px; overflow:auto; ">${ model.input.schedule.task[i].workout}</div>
            <div style="border:solid 1px; width:30px; padding:10px; padding-top:-5px; padding-bottom:-5px; ">${ model.input.schedule.task[i].set}</div>
            <div style="border:solid 1px; width:30px; padding:10px; padding-top:-5px; padding-bottom:-5px; ">${ model.input.schedule.task[i].rep}</div>
        </div>
        `;
    }
    return html;
}

function showFeedback(){
   alert("Sterkt jobba!");
}
