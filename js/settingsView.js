function settingsPage() {
  document.getElementById("app").innerHTML = /*HTML*/ `

<h1> Settings </h1>
<div onclick="mainPage()"> Main Page </div>

<div> Mode </div>
<div> Enhetsverdier </div>
<div> Date </div>
<div> Time </div>
<div> Påminnelse </div>
<div> Feedback </div>

<button onclick="saveSettings()"> Lagre Innstillinger </button>
<button onclick="editPassword()">Edit password</button>
<button onclick="mainPage()">Main page</button>
`;
}

function editPassword(){
    document.getElementById('app').innerHTML = /*HTML*/`
    <h1>Confirm its you</h1>
    <input type="password" onchange="model.input.editPass.checkIfYou = this.value">
    <button onclick="checkIfYou()">Confirm</button>
    <button onclick="settingsPage()">Cancel</button>
    `;
  }
  
  function passwordEditPage(){
    document.getElementById('app').innerHTML = /*HTML*/`
    <input type="password" onchange="model.input.editPass.newPassword = this.value" placeholder="New password">
    <input type="password" onchange="model.input.editPass.confirmPass = this.value" placeholder="Confirm new password">
    <button onclick="changePassword()">Confirm</button>
    <button onclick="settingsPage()">Cancel</button>
    `;
}