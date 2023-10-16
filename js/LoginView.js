loginView();
function loginView(){
    document.getElementById('app').innerHTML = /*HTML*/`
    <h1>MuscleWiki</h1>
    <input type="text" placeholder="Username">
    <input type="password" placeholder="Password"> 
    <button>Login</button>
    <button>Register</button>
    `;
}