function finishDay() {
    model.app.loggedInUser.log.push({
        dato: newDate(),
        task: tasks
    })
}