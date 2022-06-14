const express = require("express");
const bodyParser = require("body-parser");
var app = express();
require('dotenv').config()
require('./db/connection');
var cors = require('cors');

const user = require('./controllers/user');
const post = require('./controllers/post');
const group = require('./controllers/group');
const http = require('http'); // CORE MODULE, USED TO CREATE THE HTTP SERVER
const server = http.createServer(app); // CREATE HTTP SERVER USING APP
const port = process.env.PORT;



app.use(bodyParser.json({limit: '1000mb'}));
app.use(bodyParser.urlencoded({ extended: true, limit: '1000mb' }));
app.use(cors());



app.all('/api/auth/*', (req, res, next) => {
	user(app);
	next();
})

app.all('/api/user/*', (req, res, next) => {
	user(app);
	next();
})

app.all('/api/post/*', (req, res, next) => {
	post(app);
	next();
})

app.all('/api/group/*', (req, res, next) => {
	group(app);
	next();
})



app.set('port', port);

// LISTEN ON SPECIFIED PORT
server.listen(port);

// LOG WHICH PORT THE SERVER IS RUNNING ON
console.log('Server listening on port ' + port);

// ERROR HANDLER
app.use((err, req, res, next) => {
	console.log(err);
	res.status(err.status || 500).send(err.stack);
});

module.exports = app;