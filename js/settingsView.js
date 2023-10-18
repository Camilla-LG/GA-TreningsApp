function settingsPage() {
  document.getElementById("app").innerHTML = /*HTML*/ `

<h1> Settings </h1>
<div onclick="mainPage()"> Main Page </div>

<div class="options">
  <select class="mode" onchange="selectModeOption()">
    <option> Light </option>
    <option> Dark </option>
  </select>
  <select class="unit" onchange="selectUnitOption()">
    <option> Metric </option>
    <option> Imperial </option>
  </select>
  <select class="dateFormat" onchange="selectDateOption()">
    <option> DD/MM/YYYY </option>
  </select>
  <select class="timeFormat" onchange="selectTimeOption()">
    <option> Time </option>
  </select>
  <select class="reminder" onchange="selectReminder()">
    <option> Ja </option>
    <option> Nei </option>
  </select>
  <select class="feedback" onchange="selectFeedback()">
    <option> Ja </option>
    <option> Nei </option>
  </select>

<button onclick="saveSettings()"> Lagre Innstillinger </button>
<button onclick="editPassword()">Edit password</button>
`;
}

function editPassword(){
    document.getElementById('app').innerHTML = /*HTML*/`
    <h1>Confirm its you</h1>
    <input type="password" onchange="model.input.editPass.checkIfYou = this.value">
    <button onclick="checkIfYou()">Confirm</button>
    `;
}

function passwordEditPage(){
    document.getElementById('app').innerHTML = /*HTML*/`
    <input type="password" onchange="model.input.editPass.newPassword = this.value" placeholder="New password">
    <input type="password" onchange="model.input.editPass.confirmPass = this.value" placeholder="Confirm new password">
    <button onclick="changePassword()">Confirm</button>
    `;
}