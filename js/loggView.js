// Legg view for logg her Said

function loggView() {
    let loggHtml = /*HTML*/`
    <h1>Choose week</h1>
    <input type="text">
    <div style="witdh: fit-content; overflow: auto;">
        ${drawLoggInv()}
    <div>
    
    `;
    document.getElementById('app').innerHTML = loggHtml
}


function drawLoggInv() {
    let weeks = 1
    let ave = ``
    for (let week of model.app.loggedInUser.log) {
        ave += /*HTML*/ `<button onclick="choseDay(${weeks - 1})">Day ${weeks}</button>`
        weeks++
    }
    return ave;
}
function drawTask() {
    let element = 0;
    let x = '';
    for (let y of model.app.loggedInUser.log[model.app.loggedInUser.currentLog].task) {
        x += /*HTML*/ `
        <br>
        <div>
            <div>${model.app.loggedInUser.log[model.app.loggedInUser.currentLog].task[element].time}</div>
            <div>${model.app.loggedInUser.log[model.app.loggedInUser.currentLog].task[element].type.toUpperCase()}</div>
            <div>${model.app.loggedInUser.log[model.app.loggedInUser.currentLog].task[element].workout.toUpperCase()}</div>
            <div>Sets :  ${model.app.loggedInUser.log[model.app.loggedInUser.currentLog].task[element].volum.set}</div>
            <div>Reps :  ${model.app.loggedInUser.log[model.app.loggedInUser.currentLog].task[element].volum.rep}</div>
            <div>Log  :  ${model.app.loggedInUser.log[model.app.loggedInUser.currentLog].task[element].log}</div>
        </div>
        `;
        element++
    }
    return x;
}
function editTask() {
    let element2 = 0;
    let z = '';
    for (let u of model.app.loggedInUser.log[model.app.loggedInUser.currentLog].task) {
        z += /*HTML*/ `
        <br>
        <div>
            <div>${model.app.loggedInUser.log[model.app.loggedInUser.currentLog].task[element2].time}</div>
            <div>${model.app.loggedInUser.log[model.app.loggedInUser.currentLog].task[element2].type.toUpperCase()}</div>
            <div>${model.app.loggedInUser.log[model.app.loggedInUser.currentLog].task[element2].workout.toUpperCase()}</div>
            <div><input type="number" oninput="updateSets(${element2}, this.value)" value="${model.app.loggedInUser.log[model.app.loggedInUser.currentLog].task[element2].volum.set}"></div>
            <div><input type="number" oninput="updateRep(${element2}, this.value)" value="${model.app.loggedInUser.log[model.app.loggedInUser.currentLog].task[element2].volum.rep}"></div>
            <div><input type="text" oninput="updateLog(${element2}, this.value)" value="${model.app.loggedInUser.log[model.app.loggedInUser.currentLog].task[element2].log}"></div>
        </div>
        `;
        element2++
    }
    return z;
}

function drawTemplete() {
    let loggTemplete = /*HTML*/`
        <h1>${model.app.loggedInUser.log[model.app.loggedInUser.currentLog].dato}</h1>
        <button onclick="mainPage()">Main page</button>
        <button onclick="editTemplete()">Edit</button>
        <div>
            ${drawTask()}
        </div>
        `;
    document.getElementById('app').innerHTML = loggTemplete;
}
function editTemplete() {
    let loggTemplete = /*HTML*/`
        <h1>${model.app.loggedInUser.log[model.app.loggedInUser.currentLog].dato}</h1>
        <button onclick="mainPage()">Main page</button>
        <button onclick="drawTemplete()">Save</button>
        <div>
            ${editTask()}
        </div>
        `;
    document.getElementById('app').innerHTML = loggTemplete;
}