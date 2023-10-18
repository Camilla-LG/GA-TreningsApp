function setImg() {
  model.app.loggedInUser.profileImg = model.input.editProfileImg;
  model.input.editProfileImg = inputCopy.editProfileImg;
  editProfileView()
}

function profileEdit() {
  document.getElementById("usernameDiv").innerHTML = /*HTML*/ `
<input type="text" placeholder="Username">
`;
}