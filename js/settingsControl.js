let options = {weekday: 'long', year: 'numeric', month: 'long', day:'numeric'};
let today = new Date();
let mainDateFormat = today.toLocaleDateString(undefined, options);



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


//Denne funksjonen switcher mellom lys og mørk mode

function selectModeOption(){
  let element = document.body;
  element.classList.toggle("dark");
}


//Med denne funksjonen, velger du mellom metric og imperial enhetssystem

function selectUnitOption() {
  let unitFormat = document.getElementById("unit");
  let weight = document.getElementById("weight");
  let height = document.getElementById("height");
  let selectedFormat = unitFormat.value;

  if (selectedFormat === "metric") {
      weight.textContent = "Kg";
      height.textContent = "Cm";
  } else if (selectedFormat === "imperial") {
      weight.textContent = "Lbs";
      height.textContent = "Ft";
    }
}



//Med denne funksjonen, velger du hvordan du ønsker at datoen skal vises

function selectDateOption(){
  let selectedDateFormat = document.getElementById("dateFormat").value;
  let chosenDateFormat = mainDateFormat;

  if (selectedDateFormat === "numeric"){
    chosenDateFormat = today.toLocaleDateString();
  } else if (selectedDateFormat === "text"){
    chosenDateFormat = today.toLocaleDateString(undefined, options);
  }
  document.getElementById('outputDate').textContent = chosenDateFormat;
}

function updateTimeDiv(){
  let currentTime = new Date();
  let timeDiv = document.getElementById("outputTime");
  timeDiv.textContent = "";
  let selectedTimeFormat = document.getElementById("timeFormat").value;

  if (selectedTimeFormat === "12hr"){
    timeDiv.textContent = currentTime.toLocaleTimeString('nb-NO', {hour: 'numeric', minute: 'numeric', second: 'numeric', hour12: true});
  } else if (selectedTimeFormat === "24hr"){
    timeDiv.textContent = currentTime.toLocaleTimeString('nb-NO', {hour: 'numeric', minute: 'numeric', second: 'numeric', hour12: false});
  }
}


  
  
  

