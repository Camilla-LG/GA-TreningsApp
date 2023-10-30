// Legg view for logg her Said

function loggView() {
    let loggHtml = /*HTML*/`
    <h1>Choose week</h1>
    <input type="text">
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
            <div>${model.app.loggedInUser.log[model.app.loggedInUser.currentLog].task[element].type}</div>
            <div>${model.app.loggedInUser.log[model.app.loggedInUser.currentLog].task[element].workout}</div>
            <div>${model.app.loggedInUser.log[model.app.loggedInUser.currentLog].task[element].time}</div>
            <div>${model.app.loggedInUser.log[model.app.loggedInUser.currentLog].task[element].bodypart}</div>
            <div>${model.app.loggedInUser.log[model.app.loggedInUser.currentLog].task[element].log}</div>
            <div>${model.app.loggedInUser.log[model.app.loggedInUser.currentLog].task[element].volum.set}</div>
            <div>${model.app.loggedInUser.log[model.app.loggedInUser.currentLog].task[element].volum.rep}</div>
        </div>
        `;
        element++
    }
    return x;
}

function drawTemplete() {
    let loggTemplete = /*HTML*/`
        <div>${model.app.loggedInUser.log[model.app.loggedInUser.currentLog].dato}</div>

        <div>
            ${drawTask()}
        <div>
        `;
    document.getElementById('app').innerHTML = loggTemplete;
}