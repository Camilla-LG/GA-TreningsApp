function RegisterPage() {
  let html = /*HTML*/ `
  <h1>Register to muscleWiki</h1>
  <div class ="regInpCont"> 
    <input class="registerInputs" placeholder="Username" type="text" onchange="model.input.createUser.userName = this.value">
    <input class="registerInputs" placeholder="Password" type="text" onchange="model.input.createUser.password = this.value">
    <input class="registerInputs" placeholder="Nickname/Public username" type="text" onchange="model.input.createUser.profileName = this.value">
    <input class="registerInputs" placeholder="Age" onchange="model.input.createUser.age = this.value">

    <select class="registerInputs" onchange="model.input.createUser.sex = this.value">
        <option>Gender</option>
        <option value="Male">Male</option>
        <option value="Female">Female</option>
    </select>

    <input class="registerInputs" type="text" placeholder="Height/CM" onchange="model.input.createUser.height = this.value">
    <input class="registerInputs" type="text" placeholder="Weight/KG" onchange="model.input.createUser.weight = this.value">
    <br>
    <button class="registerSubmit" onclick="pushNewUser()">Submit</button>
    <button class="registerSubmit" onclick="loginView()">Cancel</button>
  </div>
 
`;
  app.innerHTML = html;
}
