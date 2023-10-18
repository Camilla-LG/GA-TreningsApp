function setImg() {
  model.app.loggedInUser.profileImg = model.input.editProfileImg 
  
}

function profileEdit() {
  document.getElementById("usernameDiv").innerHTML = /*HTML*/ `
<input type="text" placeholder="Username">
`;
}