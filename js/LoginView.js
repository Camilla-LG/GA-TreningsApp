
function loginView(){
    document.getElementById('app').innerHTML = /*HTML*/`
    <h1>MuscleWiki</h1>
    <input type="text" placeholder="Username" onchange="model.input.loginAs.userName = this.value">
    <input type="password" placeholder="Password" onchange="model.input.loginAs.password = this.value"> 
    <button onclick="loginControl()">Login</button>
    <button onclick="RegisterPage()">Register</button>
    `;
}

