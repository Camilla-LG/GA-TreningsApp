function loginControl() {
  if (model.data.profileList.userName === model.input.loginAs.userName && model.data.profileList === model.input.loginAs.password) {
    mainPage();
  }
}
