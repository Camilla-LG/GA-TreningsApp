function setImage(){
    profileImg = input.value;
    console.log(profileImg)
}

function profileEdit(){
    document.getElementById('usernameDiv').innerHTML = /*HTML*/`
    <input type="text" placeholder="Username">
    `;
}

