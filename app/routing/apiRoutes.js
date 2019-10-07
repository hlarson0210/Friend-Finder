var express = require("express");
var path = require("path");
var app = express();
var PORT = 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());


app.get("/api/friends", function (req, res) {
    //this is where you need to put links to the html page to get and post the information
    return res.json(characters);
    // res.json(path.join(__dirname, "../data/friends.js"));
});

// Create New Characters - takes in JSON input
app.post("/api/friends", function(req, res) {
    // req.body hosts is equal to the JSON post sent from the user
    // This works because of our body parsing middleware
    var newFriends = req.body;
  
    // Using a RegEx Pattern to remove spaces from newCharacter
    // You can read more about RegEx Patterns later https://www.regexbuddy.com/regex.html
    newFriends.routeName = newFriends.name.replace(/\s+/g, "").toLowerCase();
  
    console.log(newFriends);
  
    //characters.push(newFriends) needs to be updated to friends.push(newFriends);
    //Then wherever the home destination for 'characters' variable needs to be updated to friends
    characters.push(newFriends);
  
    res.json(newFriends);
  });

app.listen(PORT, function () {
    console.log("App listening on PORT " + PORT);
});