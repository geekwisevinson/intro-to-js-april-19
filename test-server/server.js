const express = require('express');
const bodyParser = require('body-parser');
const app = express();
app.use(bodyParser.urlencoded({
    extended: true
}));
// parse application/json
app.use(bodyParser.json());

const users = ['vinson'];
let project = {
    html: 'hello',
    js: 'goodbye'
};
app.get('/', function (req,res) {
    res.sendFile(__dirname + '/home.html' );
});

app.get('/get-users', function (req, res) {
   res.json(users);
});
app.get('/get-project', function (req, res) {
    res.json(project);
});
app.post('/add-user', function (req, res) {
    console.log('req', req.body);
    const user = req.body.user.replace(/[0-9]/gi, '');
    console.log('user name is', user);
    const isData = user;
    const alreadyInUsers = users.includes(user);
    if (isData && !alreadyInUsers)
    users.push(req.body.user);
    res.json(users);
});

app.post('/add-project', function (req, res) {
    console.log('req', req.body);
    project = req.body;
    res.json(users);
});


app.listen(4000, function () {
    console.log('listening on port 4000');
});