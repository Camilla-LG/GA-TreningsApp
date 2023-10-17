function setImg() {
const imageUrl = model.input.createUser.userImg;
let imageHtml = '';
    if (imageUrl != null) {
        imageHtml = `<img src="${imageUrl}" style="width: 50px; height: 50px;"/>`;
    }
    
    profileView()
}

function profileEdit() {
  document.getElementById("usernameDiv").innerHTML = /*HTML*/ `
<input type="text" placeholder="Username">
`;
}