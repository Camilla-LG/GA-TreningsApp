// function addTask() {
//     const taskInput = document.getElementById('taskInput');
//     const setCount = document.getElementById('setCount');
//     const repCount = document.getElementById('repCount');
//     const taskTime = document.getElementById('taskTime');


//     if (taskInput.value.trim() === '' || taskTime.value === '' || repCount.value === '' || setCount.value === '') {
//         alert('Øvelse, dato, tidspunkt og antall sett kan ikke være tomme');
//         return;
//     }

//     let task = {
//         time: taskTime.value,
//         workout: taskInput.value,
//         log: '',
//         set: setCount.value,
//         rep: repCount.value,
//     };

//     model.input.schedule.task.push(task);
//     repCount.value = '';
//     taskInput.value = '';
//     setCount.value = '';
//     taskTime.value = '';
//     scheduleView()
// }

          
    // const taskInput = document.getElementById('taskInput');
    // const setCount = document.getElementById('setCount');
    // const repCount = document.getElementById('repCount');
    // const taskTime = document.getElementById('taskTime');
    // const selectedDay = document.getElementById('daySelector').value;
    // const selectedDay = new Date(selectedDate.value);
    // const dayOfWeek = selectedDay.toLocaleDateString(undefined, options).toLowerCase();
    // const options = { weekday: 'long' };

    // const dateRow = document.getElementById('dateRow');
    // const taskRow = document.getElementById('taskRow');
    // const dateCells = dateRow.cells;
    // const taskCells = taskRow.cells;


    // for (let i = 0; i < dateCells.length; i++) {
    //     if (dateCells[i].textContent == dayOfWeek) {
    //         const cell = taskCells[i];
    //         const events = cell.textContent.split('\n');
    //         events.push(taskInput.value);
    //         cell.textContent = events.join('\n');

            // const div = document.createElement('div');
            // div.textContent = `${taskInput.value}, Tid: ${taskTime.value}, Sett: ${setCount.value}, Reps: ${repCount.value}`;
            // div.style.margin = '5px';

            // taskCell.appendChild(div);

//             repCount.value = '';
//             taskInput.value = '';
//             setCount.value = '';
//             taskTime.value = '';
//             break; // Avslutt løkken når riktig dag er funnet
//         }
//     }
// }

// OBS OBS! Ligger her midlertidig til vi har løst kommunikasjon mellom sidene

// function selectDateOption() {
//     const selectedDateFormat = document.getElementById("dateFormat").value;
//     const dateRow = document.getElementById("dateRow");
//     const today = new Date();
//     const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
//     const optionsNum = {weekday:'long', day: 'numeric', month: 'numeric'}
//     let chosenDateFormat = "text";


//     for (let i = 0; i < 7; i++) {
//         const dayDate = new Date(today);
//         dayDate.setDate(today.getDate() + i);


//         if (selectedDateFormat == "numeric") {
//             chosenDateFormat = dayDate.toLocaleDateString(undefined, optionsNum);
//         } else if (selectedDateFormat == "text") {
//             chosenDateFormat = dayDate.toLocaleDateString(undefined, options);
//         }

//         const celle = dateRow.cells[i];
//         celle.textContent = chosenDateFormat;
//     }
// }

// function populateDateSelector() {
//     const dateSelector = document.getElementById("dateSelector");
//     const today = new Date();

//     for (let i = 0; i < 7; i++) {
//         const optionDate = new Date(today);
//         optionDate.setDate(today.getDate() + i);

//         const option = document.createElement("option");
//         const options = {weekday: 'long', day: '2-digit', month: '2-digit'};
//         option.value = optionDate.toISOString().split("T")[0];
//         option.textContent = optionDate.toLocaleDateString(undefined, options); 
//         dateSelector.appendChild(option);
//     }

//     // Sett standardverdien til dagens dato
//     const todayISO = today.toISOString().split("T")[0];
//     dateSelector.value = todayISO;
// }

