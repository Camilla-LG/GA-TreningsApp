
function mainPage() {
    // let dayFinished = model.input.schedule.task[0].isDone? 'Finish this day': '';

    document.getElementById('app').innerHTML = /*HTML*/`
    <h1> Hovedside </h1>
    <div onclick="profileView()" class="profilePic" ><img style="width:180px; height:fit-content;" src="${model.app.loggedInUser.profileImg}" alt="No img"></div>
    <div class="mainArea">
        <div class="menu">
            <div onclick="scheduleView()"> Treningsplan </div>
            <div onclick="loggView()"> Logg </div>
            <div onclick="wikiPage()"> Wiki </div>
            <div onclick="settingsPage()"> Innstillinger </div>
            <div onclick="profileView()">Profil</div>
            <div onclick="logOut()">Innlogging</div>
        </div>
        <div class="nextWorkout">
            <h3>Dagens plan</h3>
            <div style="display:flex;flex-direction:row;">
                <div class="generalBox" style=" margin-left: 420px; width: 55px;">Workout</div>
                <div class="generalBox" style=" margin-left: 10px; width:30px;">Sets</div>
                <div class="generalBox" style=" margin-left: 10px; width:30px;">Reps</div>
            </div>
            <div>${drawPlan()}</div>
            <div style=" display:flex; flex-direction: row-reverse; margin-right:500px;">
            <button style="width:100px;" onclick="finishDay('main'); showFeedback()">Fullfør dag</button>
            </div>
        </div>
    </div>
    `;
}

// not done yet

function drawPlan() {
    let html = '';
    for (let i = 0; i < model.app.loggedInUser.schedule[0].task.length; i++) {
        let checked = model.app.loggedInUser.schedule[0].task[i].isDone !== true ? '':'checked';
        html += /*HTML*/`
        <div style="display:flex;flex-direction:row;">
            
            <div class="generalBox" style="margin-left:420px;  width:55px">${model.app.loggedInUser.schedule[0].task[i].workout}</div>
            <div class="generalBox" style="margin-left:10px;  width:30px">${model.app.loggedInUser.schedule[0].task[i].set}</div>
            <div class="generalBox" style="margin-left:10px;  width:30px">${model.app.loggedInUser.schedule[0].task[i].rep}</div>
            <br>
            <div class="checkbox ${checked}" onclick="toggleCheckbox(${i})"></div>
        </div>
        `;
    }
    return model.app.loggedInUser.schedule[0].task.length == 0 ? 'No tasks added yet' : html;
}
