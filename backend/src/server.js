const express = require('express')
const app = express();
const port = 3001;

const login = require('./login');

app.use(express.json());

app.get('/', (req, res) => {
    res.send("Running");
});

app.post('/login', (req, res) => {
    login.validateLogin(req.body.username, req.body.password); 
    res.send("Logging in.");
    //console.log(req.body.username);
});

app.listen(port, () => { 
    console.log("Backend running on port " + port);
});

/*
Routes:
/ --> working status
/login --> POST req. to compare in database = suc/fail + return user data
/signup --> POST req. to add in database = suc/fail
/profile/user --> GET = user + necessary data
/filter/user --> GET = user based filter results
/search/user --> GET = optimised user based result for items
*/

