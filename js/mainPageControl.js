function logOut(){
    model.app.loggedInUser = logOutCopy;
    loginView()
};
function toggleCheckbox(index) {
    model.input.schedule.task[index].isDone= !model.input.schedule.task[index].isDone;
    mainPage();
}