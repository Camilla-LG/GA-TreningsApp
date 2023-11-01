function settingsPage() {
  document.getElementById("app").innerHTML = /*HTML*/ `

<h1> Settings </h1>

<div class="settingsArea">
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
      <select id="unit" name="unitSelect" onchange="selectUnitOption()">
        <option value= "metric"> Metric </option>
        <option value="imperial"> Imperial </option>
      </select>
      <select id="dateFormat" name="dateSelect"  onchange="selectDateOption()">
        <option value="text"> Day, Month, Year </option>  
        <option value="numeric"> DD/MM/YYYY </option>
      </select>
      <select id="timeFormat" name="timeSelect" onchange="updateTimeDiv()">
      <option value="12hr"> AM/PM </option>
      <option value="24hr"> 24 Timer </option>
      </select>
      <select id="reminder" name="reminderSelect" onchange="selectReminder()">
      <option> Ja </option>
      <option> Nei </option>
      </select>
      <select id="feedback" name="feedbackSelect" onchange="selectFeedback()">
      <option> Ja </option>
      <option> Nei </option>
      </select>
    </div>
  </div>
  
  <div class="optionButtons">
    <button onclick="saveSettings()"> Lagre Innstillinger </button>
    <button onclick="editPassword()">Edit password</button>
    <button onclick="mainPage()">Main page</button>
  </div>
  
  <div class="testOutputs">
    <div class='outputUnit' id="height"></div>
    <div class='outputUnit' id="weight"></div>
    <div id='outputDate'> ${mainDateFormat} </div>
    <div id='outputTime'>  </div>
  </div>
</div>
    `;
    // setInterval(function(){chosenTimeFormat++;}, 1000); 
    // setInterval(selectTimeOption, 1000);
    setInterval(updateTimeDiv, 1000);
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