
function loginControl() {
  for (let i = 0; i < model.data.profileList.length; i++) {
    if (model.data.profileList[i].userName === model.input.loginAs.userName) {
      if (model.data.profileList[i].password === model.input.loginAs.password) {
        model.app.loggedInUser = model.data.profileList[i] 
        mainPage();
        return;
      } else {
        alert('Wrong password');
        return;
      }
    }
  }
  alert('Username not found!');
  model.input.loginAs = inputCopy.loginAs;
}
