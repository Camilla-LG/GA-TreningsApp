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

function selectDateOption(value){
  let options = {weekday: 'long', year: 'numeric', month: 'long', day:'numeric'};
  let today = new Date();

  if (value === numeric){
    return today.toLocaleDateString();
  } else {
  return today.toLocaleDateString(undefined, options);
  }
}