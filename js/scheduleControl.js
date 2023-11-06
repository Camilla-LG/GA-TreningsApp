 function finishDay(location) {
    const currentDate = new Date();
    const day = currentDate.getDate();
    const month = currentDate.getMonth() + 1; 
    const year = currentDate.getFullYear();
  
    if(model.input.schedule.task == ''){
      alert('No workouts found')
      return;
    }else {
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
  }
  
