function checkIfYou() {
  if (model.input.editPass.checkIfYou === model.app.loggedInUser.password)
    passwordEditPage();
  else {
    model.input.editPass = "";
    alert("wrong password");
  }
}
function changePassword() {
   if(model.input.editPass.newPassword !== model.input.editPass.confirmPass){
    model.input.editPass = inputCopy.editPass;
    alert('Password doesnt match!')
    return;
   };
   model.app.loggedInUser.password = model.input.editPass.newPassword;
   model.input.editPass = inputCopy.editPass;
   settingsPage()
};

function selectModeOption(){
  let element = document.body;
  element.classList.toggle("dark");
}

function selectDateOption(){
  let dateFormat = document.getElementById("dateFormat");
  let selectedFormat = dateFormat.value;
  let options = {weekday: 'long', year: 'numeric', month: 'long', day:'numeric'};
  let today = new Date();
  let chosenDateFormat = "";

  if (selectedFormat === "numeric"){
    chosenDateFormat = today.toLocaleDateString();
  } else if (selectedFormat === "text"){
    chosenDateFormat = today.toLocaleDateString(undefined, options);
  }
  document.getElementById('outputDate').textContent = chosenDateFormat;
}

document.getElementById("dateFormat").addEventListener("change", selectDateOption);

function selectTimeOption(){
  let timeFormat = document.getElementById("timeFormat");
  let selectedFormat = timeFormat.value;
  let currentTime = new Date();
  let chosenTimeFormat = "";
  
  if (selectedFormat === "12hr"){
    chosenTimeFormat = currentTime.toLocaleString('nb-NO', {hour: 'numeric', minute: 'numeric', second: 'numeric', hour12: true});
  } else if (selectedFormat === "24hr"){
    chosenTimeFormat = currentTime.toLocaleString('nb-NO', {hour: 'numeric', minute: 'numeric', second: 'numeric', hour12: false});
  }
  document.getElementById('outputTime').textContent = chosenTimeFormat;
}

document.getElementById('timeFormat').addEventListener("change", selectTimeOption);
selectTimeOption();