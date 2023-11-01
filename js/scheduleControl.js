function finishDay(location) {
    const currentDate = new Date(); // Current date and time
    const day = currentDate.getDate();
    const month = currentDate.getMonth() + 1; // Months are zero-based
    const year = currentDate.getFullYear();
  
    // Push the log entry with the custom date and tasks
    model.app.loggedInUser.log.push({
      dato: `${year}-${month}-${day}`,
      task: model.input.schedule.task
    });
    model.input.schedule.task = [];
    task = {};
    if(location === 'main'){
      mainPage()
    }else updateTaskList();
  }
  