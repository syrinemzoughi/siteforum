/* ===================
   Import Node Modules
=================== */
const express = require('express'); // Fast, unopinionated, minimalist web framework for node.
const app = express(); // Initiate Express Application
const router = express.Router(); // Creates a new router object.
const mongoose = require('mongoose'); // Node Tool for MongoDB
const config = require('./config/database'); // Mongoose Config
const path = require('path'); // NodeJS Package for file paths
//const authentication = require('./routes/auth')(router); // Import Authentication Routes
const bodyParser = require('body-parser'); // Parse incoming request bodies in a middleware before your handlers, available under the req.body property.
const ObjectID = require('mongodb').ObjectID;

//set headers

app.use(function (req, res, next) {
    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', '*');

    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.setHeader('Access-Control-Allow-Credentials', true);

    // Pass to next layer of middleware
    next();
});


// Database Connection
mongoose.Promise = global.Promise;

var mongoDB = 'mongodb://localhost:27017/forumDatabase'; 

//construction of the database sheamas
// user data bese 

var userSchema=mongoose.Schema({
    nom : String , 
    prenom : String , 
    email :  String  
  
       });
var user = mongoose.model('user', userSchema);
       
//  AXES On crée une instance du Model
var user = new user({ });
       
        
       // On le sauvegarde dans MongoDB  !
       user.save(function (err) {
         if (err) { throw err; }
         console.log('table user ajouté dans la base !');
       });
       
       //connexion de la base de donneee 
mongoose.connect(mongoDB, (err) => {
    if (err) {
      console.log('not connected to database  ', err);
    } else {
      console.log('connected to database : ' + config.db);
    }
  });

  // Middleware
app.use(bodyParser.urlencoded({ extended: false })); // parse application/x-www-form-urlencoded
app.use(bodyParser.json()); // parse application/json
app.use(express.static(__dirname + './dist/')); // Provide static directory for frontend
//app.use('/authentication', authentication);

// Connect server to database forumDatabase (with mongoose driver)
var db = mongoose.connection;



// add user to the database 
app.post("/api/adduser", function(req, res) {
    //Save usercontribution
    
        var newUser = req.body;

    
    db.collection("users").insertOne(newUser, function(err, newUser){
                if(err){
                    res.send(err);
                }
                res.json(newUser);
            });
        
    
    });


  // register user
/*app.post('/register', function (req, res) {
      var myData = req.body;
      db.collection("users").insertOne(myData,function(err,myData) {
        if(err){
              res.send(err);
        }
          res.json(myData);
        });
  
      
  });  */
    /*
    var db=mongoose.connection;
    app.post("/addcontribution", function(req, res)  {
      var myData = req.body;
      db.collection("users").insertOne(myData,function(err,myData) {
        if(err){
              res.send(err);
        }
          res.json(myData);
        });
    
      });
*/



    // Start Server: Listen on port 8080
var port=3030;
    app.listen(port, function() => {
        console.log('server running on port number:'+port);
		}); 