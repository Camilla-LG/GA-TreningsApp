
function profileView() {
  document.getElementById("app").innerHTML = /*HTML*/ `
    <h1>Profil</h1>
    <img style="height:100px; witdh: fit-content;" src="${model.app.loggedInUser.profileImg}">

    <div id="usernameDiv">${model.app.loggedInUser.profileName}<div>
    
    <div id="userAge">${model.app.loggedInUser.age}</div>
    <div id="userSex">${model.app.loggedInUser.sex}</div>
    <div id="userHeight">${model.app.loggedInUser.height}</div>
    <div id="userWeight">${model.app.loggedInUser.weight}</div>
    <div id="userBio" style="height:fit-contnet;width:250px; border:solid; overflow:hidden;">${model.app.loggedInUser.aboutMe}</div>
    <button onclick="mainPage()">Hovedside</button>
    <button onclick="editProfileView()">Endre profil</button>

    `;
  // profileText.innerHTML = username;
  // imgDiv.innerHTML = profileImg;
}


//Vis man trykker Edit Profile kan du edite alt

function editProfileView() {
  document.getElementById("app").innerHTML = /*HTML*/ `
    <h1>Profil</h1>
    <div>Profil bilde:</div>
    <input type="text" id="imgInput" value="${model.input.editProfileImg}" onchange="model.input.editProfileImg = this.value">
    <button onclick="setImg()">Endre bilde</button>
    <br>
    <div>
    <img style="height:100px; witdh: fit-content;" src="${model.app.loggedInUser.profileImg}">
    </div>

    <div id="usernameDiv"><input value="${model.app.loggedInUser.profileName}" oninput="model.app.loggedInUser.profileName = this.value"></div>
    <div id="userAge"><input value="${model.app.loggedInUser.age}" type="text" oninput="model.app.loggedInUser.age = this.value"></div>
    <div id="userHeight"><input value="${model.app.loggedInUser.height}" oninput="model.app.loggedInUser.height = this.value"></div>
    <div id="userWeight"><input value="${model.app.loggedInUser.weight}" oninput="model.app.loggedInUser.weight = this.value"></div>
    <div id="userBio"><input style="height:fit-content; weight:150px;" value="${model.app.loggedInUser.aboutMe}" oninput="model.app.loggedInUser.aboutMe = this.value"></div>

    <button onclick="profileView()">Lagre</button>
    `;
}
