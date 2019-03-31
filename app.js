// app.js
// Main file to launch server application
// ==================

// call the packages we need
let express    = require('express');        // call express
let app        = express();                 // define our app using express
let bodyParser = require('body-parser');
let mysql      = require("mysql");

// model objects
const pl = require('./models/player');
const gp = require('./models/gamesPlayed');

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

/**
 * Check whether request is authorized (tmp workaround using tokens)
 * @param {*} req request
 * @param {*} res  ressource 
 * @param {*} next next callback
 */
function isAuthenticated(req, res, next) {
    // do any checks you want to in here
  
    // CHECK THE USER STORED IN SESSION FOR A CUSTOM VARIABLE
    // you can do this however you want with whatever variables you set up
    // if (req.user.authenticated)

    let token = process.env.TOKEN || "";

    // ignore auth check
    if (token == "") {
        return next();
    }

    // same token
    if (req.body.token == token)
         return next();

    // IF A USER ISN'T LOGGED IN, THEN REDIRECT THEM SOMEWHERE
    //res.redirect('/');
    res.send(JSON.stringify({"status": 401, "response": "UserUnauthorized"}));  
}

// PLAYERS
// =============================================================================

/**
 * @api {post} /players Create Account
 * @apiDescription Create a new player
 * @apiName CreatePlayer
 * @apiVersion 1.0.0
 * @apiGroup Player
 * 
 * @apiHeader {Date}  created_at    player last update
 * 
 * @apiSuccess {String} response    Created Player id
 * 
 * @apiError UserUnauthorized       Authorization failed, please try again
 * @apiError AccountAlreadyExist    Account could not be created, because email already exist
 * @apiError FailedCreating         Account could not be created
 */
router.post('/players',isAuthenticated, (req, res) => {

    // input
    let createdAt = req.body.created_at;
    let gamesPlayed = new gp.GamesPlayed(
        req.body.games_played_aral,
        req.body.games_played_blitz,
        req.body.games_played_blitz_rounds,
        req.body.games_played_casual,
        req.body.games_played_casual5v5,
        req.body.games_played_ranked,
        req.body.games_played_ranked5v5);

    // //input
    // let email = req.body.email;
    // let surname = req.body.surname;
    // let firstname = req.body.firstname;
    // let password = req.body.password;
    // let birthdate = req.body.birthdate;

    // //optional
    // let verified = req.body.verified;

    // let account = new a.Account(email, surname, firstname, password, birthdate,verified);
    // res.locals.connection.query(account.getAddSQL(),  function (err, data) {
    //     if(err){
    //         // email already exist
    //         if (err.code == "ER_DUP_ENTRY") {
    //             // forbidden
    //             res.send(JSON.stringify({"status": 403, "error": err, "response": "AccountAlreadyExist"}));  
    //         } else {
    //             // all other errors
    //             res.send(JSON.stringify({"status": 405, "error": err, "response": "FailedCreating"})); 
    //         }
    //     } else {
    //         res.status(200).json({
    //             response: data.insertId
    //         });
    //     }
    // });
});


router.get('/players', isAuthenticated,function(req, res) {

    res.locals.connection.query("SELECT * FROM MATCHES", function (error, results, fields) {
        if(error){
            res.send(JSON.stringify({"status": 400, "error": error, "response": "GuildlistNotLoaded"})); 
            //If there is error, we send the error in the error section with 500 status
        } else {
            res.status(200).json({
                response: results
            });
        }
    });
});

// more routes for our API will happen here

// REGISTER OUR ROUTES -------------------------------
// all of our routes will be prefixed with /api
app.use('/api', router);

// START THE SERVER
// =============================================================================
app.listen(port);
console.log('Ready at Port ' + port);