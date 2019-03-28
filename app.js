// app.js
// Main file to launch server application
// ==================

// call the packages we need
let express    = require('express');        // call express
let app        = express();                 // define our app using express
let bodyParser = require('body-parser');
let mysql      = require("mysql");

//load settings
var dbSettings = {};
try {
    dbSettings = require("./defaults/settings.json");
} catch (e) {
    if (e.code !== 'MODULE_NOT_FOUND') {
        throw e;
    }
    console.log('Warning: /defaults/settings.json not found. Loading default default_settings.json...');
    dbSettings = require("./templates/default_settings.json");
}


// configure app to use bodyParser()
// this will let us get the data from a POST
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

let port = process.env.PORT || 8080;        // set our port

// ROUTES FOR OUR API
// =============================================================================
var router = express.Router();              // get an instance of the express Router

// initialize db connection
app.use(function(req, res, next){
    res.setHeader('Content-Type', 'application/json');
	res.locals.connection = mysql.createConnection({
		host     : dbSettings.host,
		user     : dbSettings.user,
		password : dbSettings.password,
		database : dbSettings.database
	});
	next();
});