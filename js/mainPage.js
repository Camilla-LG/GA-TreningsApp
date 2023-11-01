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
            <h3>Dagens plan</h3>
            <div style="display:flex;flex-direction:row;">
                <div class="generalBox" style=" margin-left: 160px; width:40px;">Time</div>
                <div class="generalBox" style=" margin-left: 10px; width: 55px;">Workout</div>
                <div class="generalBox" style=" margin-left: 10px; width:30px;">Sets</div>
                <div class="generalBox" style=" margin-left: 10px; width:30px;">Reps</div>
            </div>
            <div>${drawPlan()}</div>
            <button ></button>
        </div>
    </div>
    `;
}

// not done yet

function drawPlan() {
    let html = '';
    
    for (let i = 0; i < model.input.schedule.task.length; i++) {
        let checked = model.input.schedule.task[i].isDone !== true?'':'checked';
        html += /*HTML*/`
        <div style="display:flex;flex-direction:row;">
            <div class="generalBox" style="margin-left:160px; width:40px">${model.input.schedule.task[i].time}</div>
            <div class="generalBox" style="margin-left:10px;  width:55px">${model.input.schedule.task[i].workout}</div>
            <div class="generalBox" style="margin-left:10px;  width:30px">${model.input.schedule.task[i].set}</div>
            <div class="generalBox" style="margin-left:10px;  width:30px">${model.input.schedule.task[i].rep}</div>
            <br>
            <div class="checkbox ${checked}" onclick="toggleCheckbox(${i})"></div>
        </div>
        `;
    }
    return model.input.schedule.task.length == '' ? 'No tasks added yet' : html;
}
