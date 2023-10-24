function settingsPage() {
  document.getElementById("app").innerHTML = /*HTML*/ `

<h1> Settings </h1>
<div onclick="mainPage()"> Main Page </div>

<div class="options">
  <div class="type">
    <a> Mode </a>
    <a> Units </a>
    <a> Dato visning </a>
    <a> Tid visning </a>
    <a> Påminnelse </a>
    <a> Tilbakemeldinger </a>
  </div>
  <div class="dropdowns">
    <select class="mode" name="modeSelect" onchange="selectModeOption()">
      <option> Light </option>
      <option> Dark </option>
    </select>
    <select class="unit" name="unitSelect" onchange="selectUnitOption()">
      <option> Metric </option>
      <option> Imperial </option>
    </select>
    <select id="dateFormat" name="dateSelect"  onchange="selectDateOption()">
      <option value="numeric"> DD/MM/YYYY </option>
      <option value="text"> Day, Month, Year </option>  
    </select>
    <select class="timeFormat" name="timeSelect" onchange="selectTimeOption()">
    <option> Time </option>
    </select>
    <select class="reminder" name="reminderSelect" onchange="selectReminder()">
    <option> Ja </option>
    <option> Nei </option>
    </select>
    <select class="feedback" name="feedbackSelect" onchange="selectFeedback()">
    <option> Ja </option>
    <option> Nei </option>
    </select>
    </div>
    </div>
    
    
    <button onclick="saveSettings()"> Lagre Innstillinger </button>
    <button onclick="editPassword()">Edit password</button>
    <button onclick="mainPage()">Main page</button>
    
    <div id='outputDate'></div>
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