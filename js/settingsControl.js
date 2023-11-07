



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


// function selectDateOption(){
//   const selectedDateFormat = document.getElementById("dateFormat").value;
//   const rowOfDates = document.getElementById("rowOfDates");
//   const today = new Date();
//   const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };

//   for (let i = 0; i < 7; i++) {
//       const dayDate = new Date(today);
//       dayDate.setDate(today.getDate() + i);

//       let chosenDateFormat;

//       if (selectedDateFormat === "numeric") {
//           chosenDateFormat = dayDate.toLocaleDateString();
//       } else if (selectedDateFormat === "text") {
//           chosenDateFormat = dayDate.toLocaleDateString(undefined, options);
//       }

//       const celle = rowOfDates.cells[i];
//       celle.textContent = chosenDateFormat;
//   }
// }

// Kall funksjonen for å initialisere datoformatet når siden lastes
selectDateOption();

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


  
  
  

