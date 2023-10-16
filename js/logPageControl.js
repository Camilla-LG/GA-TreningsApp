// function for å adde log inngang
function lo(){
    const logDay = document.getElementById("logDay").value = "";
    const logTime = document.getElementById("logTime").value = "";
    const logWorkout = document.getElementById("logWorkout").value = "";
    const logBodyPart = document.getElementById("logBodyPart").value = "";

    // Skal se om input filen er tomt eller ikke
    if (logDay && logTime && LogWorkout && logBodyPart){
        // Lager en ny log 
        const newlogPage ={
            day: [logDay],
            time: [logTime],
            workout: [logWorkout],
            bodypart: [logBodyPart],
        };
        
        // skaper ny log for bruker
        appData.input.log.push(newlogPage);

        // sletter info i input
        document.getElementById("logDay") = "";
        document.getElementById("logTime") = "";
        document.getElementById("logWorkout") = "";
        document.getElementById("logBodyPart") = "";

    
    }
}