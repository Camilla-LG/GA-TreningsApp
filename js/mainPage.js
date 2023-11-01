mainPage()
function mainPage() {
    document.getElementById('app').innerHTML = /*HTML*/`
    
    <h1> Main Page </h1>
    <div onclick="profileView()" class="profilePic" ><img style="width:180px; height:fit-content;" src="${model.app.loggedInUser.profileImg}" alt="No img"></div>
    <div class="mainArea">
        <div class="menu">
            <div onclick="scheduleView()"> Treningsplan </div>
            <div onclick="loggView()"> Logg </div>
            <div onclick="wikiPage()"> Wiki </div>
            <div onclick="settingsPage()"> Innstillinger </div>
            <div onclick="profileView()">Profile</div>
            <div onclick="logOut()">Logout</div>
        </div>
        <div class="nextWorkout">
            <h3> Neste økt! </h3>
            <div>${drawPlan()}</div>
            <button ></button>
        </div>
    </div>
    `;
}

function drawPlan() {
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
    return model.input.schedule.task.length == '' ? 'No tasks added yet': html;
}
