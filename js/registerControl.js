//
function pushNewUser() {
    let profileIndex = 0;
    if(model.input.createUser.userName == ''){
        alert('You cant use empty space as a username!')
        model.input.createUser = inputCopy.createUser
        return;
    };
    for(let profile of model.data.profileList){
        if (model.data.profileList[profileIndex].userName === model.input.createUser.userName){
            alert('Username already taken!!')
            model.input.createUser = inputCopy.createUser
            RegisterPage()
            return;
        };
        profileIndex++
    }
model.input.createUser.id = model.data.profileList.length + 1    
model.data.profileList.push(model.input.createUser)
alert('Welcome user ' + model.input.createUser.profileName+'!')
model.input.createUser = inputCopy.createUser
loginView()
};