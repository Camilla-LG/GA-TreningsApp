const model = {
  app: {
    //innstillinger som gjelder generelt for hele nettsiden
    genOpt: {
      lang: 'en',
      mode: ['dark', 'light'],
      unit: ['metric', 'imperial'],
      dateFormat: ['DD/MM/YYYY', 'Day, Month, Year'],
      timeFormat: ['12','24'],
      challengeReminder: {
        on: true, interval: '16.30', days: 'M/T/F/S'
      },
      workoutPlanReminder: 'all',
      feedback: true
    },

    pages: [
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
    loggedInUser: {
      Id: 0,
      userName: "Test",
      password: "ave",
      profileName: "Testtttt",
      profileImg: `https://static1.srcdn.com/wordpress/wp-content/uploads/2021/08/Ryan-Reynolds-in-Free-Guy.jpg?q=50&fit=contain&w=1140&h=&dpr=1.5`,
      homeTown: "Test Sted",
      age: "20",
      sex: "Female",
      height: "175",
      weight: "75",
      aboutMe: "info",
      workoutprogram: [{
        weeks: ["one", "two", "three", "four"],
        days: ["monday", "tuesday", "wednesday", "thursday", "friday", "saturday", "sunday"],
        programDetails: ["fullbody", "chest", "shoulders"],
      },],
      schedule: [{
        day: ["monday", "tuesday", "wednesday", "thursday", "friday", "saturday", "sunday"],
        time: ["12:00"],
        workout: ["squats"],
        bodypart: ["thighs", "knees"]
      },],
      currentWeek: 1,
      log: [{
        week: 1,
        day: ["monday", "tuesday", "wednesday", "thursday", "friday", "saturday", "sunday"],
        time: ["12:00"],
        workout: ["squats"],
        bodypart: ["thighs", "knees"]
      },
      {
        week: 2,
        day: ["monday", "tuesday", "wednesday"],
        time: ["15:00"],
        workout: ["pushups"],
        bodypart: ["arms", "chest"]
      },
      ],
    },
  },

  //Alt som blir lagt inn i input, mellomlagres her frem til lagring i data (skjer når man trykker på lagre)
  input: {
    editPass: {
      checkIfYou: "",
      newPassword: "",
      confirmPass: ""
    },

    loginAs: {
      userName: "",
      password: "",
    },

    createUser: {
      id: null,
      userName: "",
      password: "",
      profileName: "",
      profileImg: "",
      homeTown: "",
      age: "",
      sex: "",
      height: "",
      weight: "",
      aboutMe: "",
      workoutprogram: [],
      currentWeek: null,
      log: [],
      schedule: [],
    },

    schedule: {
      day: [""],
      time: [""],
      workout: [""],
      bodypart: [""],
    },

    log: {
      week: 1,
      time: [""],
      workout: [""],
      bodypart: [""],
    },

    editProfileImg: "",
  },

  //Her blir alle data fra input lagret permanent til evt sletting
  data: {
    workouts: ["squats",],

    workoutWiki: {
      squats: [{
        id: '123',
        workout: "squats",
        video: "",
        text: ""
      },],
      pushup: [{
        id: '1234',
        workout: "pushup",
        video: "",
        text: ""
      },],
    },

    programDetails: {
      fullbody: ["chest", "triceps", "legs", "shoulders", "traps", "abs", "back", "biceps"],
      chest: ["chest"],
      shoulder: ["shoulders", "traps"],
      arms: ["triceps", "biceps", "forearm"],
      back: ["upper back", "lower back"],
      legs: ["lower legs", "upper legs"],
      ab: ["abs"],
    },

    //WP, schedule, log ligger lagret på hver bruker. Mulig vi gjør det om til lister etter hvert
    //og linker til bruker med id'er
    profileList: [{
      id: 1,
      userName: "Oli",
      profileName: "Olivia",
      password: "pass",
      profileImg: "",
      homeTown: "place",
      age: "00",
      sex: "Female",
      height: "175",
      weight: "75",
      aboutMe: "info",
      workoutprogram: [{
        week: 1,
        weeks: ["one", "two", "three", "four"],
        days: ["monday", "tuesday", "wednesday", "thursday", "friday", "saturday", "sunday"],
        programDetails: ["fullbody", "chest", "shoulders"],
      },],
      schedule: [{
        day: ["monday", "tuesday", "wednesday", "thursday", "friday", "saturday", "sunday"],
        time: ["12:00"],
        workout: ["squats"],
        bodypart: ["thighs", "knees"]
      },],
      currentWeek: 1,
      log: [{
        week: 1,
        day: ["monday", "tuesday", "wednesday", "thursday", "friday", "saturday", "sunday"],
        time: ["12:00"],
        workout: ["squats"],
        bodypart: ["thighs", "knees"]
      },],
    },],
  },
};


const logOutCopy = {
  Id: 0,
  userName: "",
  profileName: "",
  profileImg: "",
  homeTown: "",
  age: "",
  sex: "",
  height: "",
  weight: "",
  aboutMe: "",
  workoutprogram: [{
    weeks: [],
    days: [],
    programDetails: [],
  },],
  schedule: [{
    day: [],
    time: [],
    workout: [],
    bodypart: []
  },],
  currentWeek: null,
  log: [{
    week: 1,
    day: [],
    time: [],
    workout: [],
    bodypart: []
  },],
}


const inputCopy = {
  editPass: {
    checkIfYou: "",
    newPassword: "",
    confirmPass: ""
  },

  loginAs: {
    userName: "",
    password: "",
  },

  createUser: {
    id: "",
    userName: "",
    password: "",
    profileName: "",
    profileImg: "",
    homeTown: "",
    age: "",
    sex: "",
    height: "",
    weight: "",
    aboutMe: "",
    workoutprogram: [],
    log: [],
    schedule: [],
  },

  schedule: {
    day: [""],
    time: [""],
    workout: [""],
    bodypart: [""],
  },
  currentWeek: 1,
  log: {
    week: 1,
    time: [""],
    workout: [""],
    bodypart: [""],
  },

  editProfileImg: "",
}