function setImg() {
  model.app.loggedInUser.profileImg = model.input.editProfileImg 
  profileView()
}

function profileEdit() {
  document.getElementById("usernameDiv").innerHTML = /*HTML*/ `
<input type="text" placeholder="Username">
`;
}