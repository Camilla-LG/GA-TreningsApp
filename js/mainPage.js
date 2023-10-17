mainPage()
function mainPage(){
    document.getElementById('app').innerHTML = /*HTML*/`
    
    <h1> Main Page </h1>
    <div onclick="profileView()" class="profilePic"> Profile Pic </div>
    <div class="mainArea">
        <div class="menu">
            <div onclick="scheduleWiew()"> Treningsplan </div>
            <div onclick="logPage()"> Logg </div>
            <div onclick="wikiPage()"> Wiki </div>
            <div onclick="settingsPage()"> Innstillinger </div>
            <div onclick="profileView()">Profile</div>
            <div onclick="logOut()">Logout</div>
        </div>
        <div class="nextWorkout">
            <h3> Neste økt! </h3>
            <div> Oversikt over økten kommer her </div>
        </div>
    </div>
    `; 
}