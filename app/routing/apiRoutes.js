var express = require("express");
var path = require("path");
var app = express();
var PORT = 3000;
var friends = require("../data/friends.js");
// var connect = require("./htmlRoutes.js");

app.use(express.urlencoded({ extended: true }));
app.use(express.json());


exports.api = app.get("/api/friends", function (req, res) {
    return res.json(friends.friends);
});

// Connects to the server here
// connect.listen;


// Create New Friends - takes in JSON input
app.post("/api/friends", function (req, res) {
    // req.body hosts is equal to the JSON post sent from the user
    // This works because of our body parsing middleware
    var newFriends = req.body;

    newFriends.name = newFriends.name.replace(/\s+/g, "").toLowerCase();

    console.log(newFriends);


    friends.push(newFriends);

    res.json(newFriends);
});
