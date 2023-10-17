const model = {
  app: {
    //innstillinger som gjelder generelt for hele nettsiden
    genOpt :{
        lang: 'en',
        darkMode: false,
        metric: true,
        kg: true,
        dateFormat: 'DD/MM/YYYY',
        timeFormat: '24',
        challengeReminder:{
            on: true, interval: '16.30', days:'M/T/F/S'
        },
        workoutPlanReminder: 'all',
        feedback: true
    },

    pages:[
      "loginPage",
      "mainPage",
      "Profile",
      "genOptions",
      "workprogram",
      "log",
      "wiki",
    ],

    //Profilen som er pålogget vil ha alle disse tingene tilgjengelig
    //Tøm dummydata før GOtime
    loggedInUser:{
      Id: 0,
      userName:"Test",
      password:"ave",
      profileName: "Testtttt",
      profileImg:"",
      homeTown: "Test Sted",
      age: "20",
      sex:"Female",
      height:"175",
      weight:"75",
      aboutMe: "info",
      workoutprogram:[{
        weeks:["one","two","three","four"],
        days:["monday","tuesday","wednesday","thursday","friday","saturday","sunday"],
        programDetails: ["fullbody","chest","shoulders"], 
      },],
      schedule:[{
        day: ["monday","tuesday","wednesday","thursday","friday","saturday","sunday"],
        time: ["12:00"],
        workout: ["squats"],
        bodypart: ["thighs","knees"]
      },],
      log:[{
        day: ["monday","tuesday","wednesday","thursday","friday","saturday","sunday"],
        time: ["12:00"],
        workout: ["squats"],
        bodypart: ["thighs","knees"]
      },],
    },  
  },

//Alt som blir lagt inn i input, mellomlagres her frem til lagring i data (skjer når man trykker på lagre)
  input:{
    editPass: {
      checkIfYou:"",
      newPassword:"",
      confirmPass:""
    },

    loginAs: {
      userName: "",
      password: "",
    },
    
    createUser:{
      id:"",
      userName:"",
      password: "",
      profileName: "",
      profileImg:"",
      homeTown: "",
      age: "",
      sex:"",
      height:"",
      weight:"",
      aboutMe: "",
      workoutprogram:[],
      log:[],
      schedule:[],
  },

    schedule: {
      day: [""],
      time: [""],
      workout: [""],
      bodypart: [""],
    },
    
    log: {
      time: [""],
      workout: [""],
      bodypart: [""],
    },    

    editProfileImg: "",
}, 

//Her blir alle data fra input lagret permanent til evt sletting
  data:{
    workouts: ["squats",],

    workoutWiki: {
      squats: [{ id: '123',
          workout: "squats",
          video: "",
          text: ""},],
      pushup: [{ id: '1234',
          workout: "pushup",
          video: "",
          text: ""},],
    },

    programDetails:{
      fullbody:["chest","triceps","legs","shoulders","traps","abs","back","biceps"],
      chest: ["chest"],
      shoulder:["shoulders","traps"],
      arms:["triceps","biceps","forearm"],
      back:["upper back","lower back"],
      legs:["lower legs","upper legs"],
      ab:["abs"],
    },

    //WP, schedule, log ligger lagret på hver bruker. Mulig vi gjør det om til lister etter hvert
    //og linker til bruker med id'er
    profileList:[{
      id: 1,
      userName: "Oli",
      profileName: "Olivia",
      password: "pass",
      profileImg:"",
      homeTown: "place",
      age: "00",
      sex:"Female",
      height:"175",
      weight:"75",
      aboutMe: "info",
      workoutprogram:[{
        weeks:["one","two","three","four"],
        days:["monday","tuesday","wednesday","thursday","friday","saturday","sunday"],
        programDetails: ["fullbody","chest","shoulders"], 
      },],
      schedule:[{
        day: ["monday","tuesday","wednesday","thursday","friday","saturday","sunday"],
        time: ["12:00"],
        workout: ["squats"],
        bodypart: ["thighs","knees"]
      },],
      log:[{
        day: ["monday","tuesday","wednesday","thursday","friday","saturday","sunday"],
        time: ["12:00"],
        workout: ["squats"],
        bodypart: ["thighs","knees"]
      },],
    },],
  },
};


const logOutCopy= {
    Id: 0,
    userName:"",
    profileName: "",
    profileImg:"",
    homeTown: "",
    age: "",
    sex:"",
    height:"",
    weight:"",
    aboutMe: "",
    workoutprogram:[{
      weeks:[],
      days:[],
      programDetails: [], 
    },],
    schedule:[{
      day: [],
      time: [],
      workout: [],
      bodypart: []
    },],
    log:[{
      day: [],
      time: [],
      workout: [],
      bodypart: []
    },],
}


const inputCopy ={
    editPass: {
      checkIfYou:"",
      newPassword:"",
      confirmPass:""
    },

    loginAs: {
      userName: "",
      password: "",
    },
    
    createUser:{
      id:"",
      userName:"",
      password: "",
      profileName: "",
      profileImg:"",
      homeTown: "",
      age: "",
      sex:"",
      height:"",
      weight:"",
      aboutMe: "",
      workoutprogram:[],
      log:[],
      schedule:[],
  },

    schedule: {
      day: [""],
      time: [""],
      workout: [""],
      bodypart: [""],
    },
    
    log: {
      time: [""],
      workout: [""],
      bodypart: [""],
    },    

    editProfileImg: "", 
}