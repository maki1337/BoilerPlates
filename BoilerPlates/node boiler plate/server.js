//REQUIRE VARIABLES
const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
//var async = require('async');

//APP SETTINGS
const app = express();
const port = 3000;
app.use(bodyParser.urlencoded({extended: true}));
app.set("view engine","ejs");
app.use(express.static(__dirname + '/public'));



//MONGOOSE CONNECT
//mongoose.connect("mongodb://localhost/my_store")

//ROUTES
app.get("/",function(req,res){
    res.send("drek");
});



//APP CONNECT
app.listen(port, () => console.log(`Example app listening on port ${port}!`));