function loggView() {
    let loggHtml = /*HTML*/`
    <button onclick="mainPage()">X</button>
    <span class="wikiSpan">Hovedside</span>
    <h1>Velg dag</h1>
    <input type="text">
    <div style="witdh: fit-content; overflow: auto;">
        ${drawLoggInv()}
    <div>
    
    `;
    document.getElementById('app').innerHTML = loggHtml
}


function drawTemplete() {
    let loggTemplete = /*HTML*/`
        <h1>${model.app.loggedInUser.log[model.app.loggedInUser.currentLog].dato}</h1>
        <button onclick="loggView()">Back</button>
        <button onclick="editTemplete()">Edit</button>
        <div>
            ${drawTask()}
        </div>
        `;
    document.getElementById('app').innerHTML = loggTemplete;
}


function drawLoggInv() {
    let weeks = 1
    let ave = ``
    for (let week of model.app.loggedInUser.log) {
        ave += /*HTML*/ `<button onclick="choseDay(${weeks - 1})">${model.app.loggedInUser.log[weeks-1].dato}</button>`
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
            <div>${model.app.loggedInUser.log[model.app.loggedInUser.currentLog].task[element].workout.toUpperCase()}</div>
            <div>Sets :  ${model.app.loggedInUser.log[model.app.loggedInUser.currentLog].task[element].set}</div>
            <div>Reps :  ${model.app.loggedInUser.log[model.app.loggedInUser.currentLog].task[element].rep}</div>
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
            <div>${model.app.loggedInUser.log[model.app.loggedInUser.currentLog].task[element2].workout.toUpperCase()}</div>
            <div><input type="number" oninput="updateSets(${element2}, this.value)" value="${model.app.loggedInUser.log[model.app.loggedInUser.currentLog].task[element2].set}"></div>
            <div><input type="number" oninput="updateRep(${element2}, this.value)" value="${model.app.loggedInUser.log[model.app.loggedInUser.currentLog].task[element2].rep}"></div>
            <div><input type="text" oninput="updateLog(${element2}, this.value)" value="${model.app.loggedInUser.log[model.app.loggedInUser.currentLog].task[element2].log}"></div>
        </div>
        `;
        element2++
    }
    return z;
}

function editTemplete() {
    let loggTemplete = /*HTML*/`
        <h1>${model.app.loggedInUser.log[model.app.loggedInUser.currentLog].dato}</h1>
        <button onclick="drawTemplete()">Save</button>
        <div>
            ${editTask()}
        </div>
        `;
    document.getElementById('app').innerHTML = loggTemplete;
}