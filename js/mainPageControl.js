function logOut(){
    model.app.loggedInUser = logOutCopy;
    loginView()
};
function toggleCheckbox(index) {
    model.app.loggedInUser.schedule[0].task[index].isDone= !model.app.loggedInUser.schedule[0].task[index].isDone;
    model.app.loggedInUser.log.push(model.app.loggedInUser.schedule[0].task[index]);
    model.app.loggedInUser.schedule[0].task.splice(index, 1);
    alert("Sterkt jobba!");
    console.log("checked")
    mainPage();
}