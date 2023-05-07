var sqlite3 = require('sqlite3').verbose();
var express = require('express');
var http = require('http');
var path = require("path");
var bodyParser = require('body-parser');
var helmet = require('helmet');
var rateLimit = require("express-rate-limit");

var app = express();
var server = http.createServer(app);

const limiter = rateLimit({
    windowMs: 15 * 60 * 1000, // 15 minutes
    max: 100 // limit each IP to 100 requests per windowMs
});


var db = new sqlite3.Database('./database/contact.db');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname)));
app.use(helmet());
app.use(limiter);

db.run('CREATE TABLE IF NOT EXISTS contact(first_name TEXT, last_name TEXT, email TEXT, phone_number TEXT, problem TEXT)');

//Get request
app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname, 'contact.html'))
});

//if site URL doesn't exist, display error code 404, with the message page does not exist
app.get('*', function (req, res) {
    res.status(404).send('Error 404: Page Does Not Exist');
});

app.post('/add', function (req, res) {
    db.serialize(() => {
        db.run('INSERT INTO contact(first_name, last_name, email, phone_number, problem) VALUES(?,?,?,?,?)', [req.body.first_name, req.body.last_name, req.body.email, req.body.phone_number, req.body.problem], function (err) {
            if (err) {
                return console.log(err.message);
            }
            console.log("New contact info has been added");

            var delayInMilliseconds = 5000;

            setTimeout(function () {
                res.sendFile(path.join(__dirname, 'index.html'))
            }, delayInMilliseconds);

        });
    });
});

server.listen(3000, function () {
    console.log("Server listening on port: 3000");
});