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
  
  function selectDateOption() {
    const selectedDateFormat = document.getElementById("dateFormat").value;
    const rowOfDates = document.getElementById("rowOfDates");
    const today = new Date();
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
  
    for (let i = 0; i < 7; i++) {
        const dayDate = new Date(today);
        dayDate.setDate(today.getDate() + i);
  
        let chosenDateFormat;
  
        if (selectedDateFormat === "numeric") {
            chosenDateFormat = dayDate.toLocaleDateString();
        } else if (selectedDateFormat === "text") {
            chosenDateFormat = dayDate.toLocaleDateString(undefined, options);
        }
  
        const celle = rowOfDates.cells[i];
        celle.textContent = chosenDateFormat;
    }
  }
  
  // Kall funksjonen for å initialisere datoformatet når siden lastes
  selectDateOption(); 