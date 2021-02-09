let user = {
    name: 'Rory',
    password: 'password'
}

module.exports.validateLogin = (uname, passwd) => {
    if( (uname === user.name) && (passwd === user.password) ) {
        console.log("User is Rory");
        return true;
    }
    else {
        console.log("Unknown user");
        return false;
    }
}
