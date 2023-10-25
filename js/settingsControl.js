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


//Med denne funksjonen, velger du mellom metric og imperial enhetssystem, det er 
//lagt til eventListener utenfor funksjonen slik at den alltid sjekker om
//man endrer valg i dropdown menyen

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
document.getElementById("unit").addEventListener("change", selectUnitOption);


//Med denne funksjonen, velger du hvordan du ønsker at datoen skal vises, det er 
//lagt til eventListener utenfor funksjonen slik at den alltid sjekker om
//man endrer valg i dropdown menyen

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


//Med denne funksjonen, velger du hvordan du ønsker at klokken skal vises, det er 
//lagt til eventListener utenfor funksjonen slik at den alltid sjekker om
//man endrer valg i dropdown menyen

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