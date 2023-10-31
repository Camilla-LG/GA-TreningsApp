function choseDay(index) {
    model.app.loggedInUser.currentLog = index;
    drawTemplete()
}


function updateRep(index, value) {
    model.app.loggedInUser.log[model.app.loggedInUser.currentLog].task[index].rep = value;
}

function updateLog(index, value) {
    model.app.loggedInUser.log[model.app.loggedInUser.currentLog].task[index].log = value;
}
function updateSets(index, value) {
    model.app.loggedInUser.log[model.app.loggedInUser.currentLog].task[index].set = value;
}