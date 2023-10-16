function profileView(){
    document.getElementById('app').innerHTML = /*HTML*/ `
    <h1>Profile</h1>
    <input placeholder="Link your image here" class="profileInput"> <button onclick="setImage">Enter</button>
    <div id="imgDiv"></div>
    <div type="text" placeholder="Username" id="usernameDiv" onclick="profileEdit()">Name</div>
    
    <div id="userAge">Age</div>
    <div id="userSex">Sex</div>
    <div id="userHeight">Height</div>
    <div id="userWeight">Weight</div>
    <div id="userBio">About me</div>
    `;
    profileText.innerHTML = username;
    imgDiv.innerHTML = profileImg;
 };
