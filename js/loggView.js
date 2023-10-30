// Legg view for logg her Said

function loggView(){
    let loggHtml = /*HTML*/`
    <h1>Choose week</h1>
    <div style="witdh: fit-content; overflow: auto;">
        ${drawLoggInv()}
    <div>
    
    `;
    document.getElementById('app').innerHTML = loggHtml
}


function drawLoggInv() {
    let weeks = 1
    let ave = ``
    for(let week of model.app.loggedInUser.log){
       ave += /*HTML*/ `<button onclick="model.app.loggedInUser.currentWeek = ${weeks}">Week ${weeks}</button>`
       weeks++
    }
    return ave;
}