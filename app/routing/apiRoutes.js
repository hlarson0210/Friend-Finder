var path = require("path");
var friendsFile = require("../data/friends.js");
var friends = friendsFile.friends;


module.exports = function (app) {
    app.get("/api/friends", function (req, res) {
        return res.json(friends);
    });

    // Create New Friends - takes in JSON input
    app.post("/api/friends", function (req, res) {
        // req.body hosts is equal to the JSON post sent from the user
        // This works because of our body parsing middleware
        var newFriends = req.body;
        var matchedFriend;

        for (obj in friends) {
            var sumDifference = 0;
            for (val in friends[obj].scores) {
                sumDifference += Math.abs(parseInt(friends[obj].scores[val]) - parseInt(newFriends.scores[val]));
            }
            if (!matchedFriend) {
                matchedFriend = friends[obj];
                matchedFriend.difference = sumDifference;
            } else if (matchedFriend.difference > sumDifference) {
                matchedFriend = friends[obj];
                matchedFriend.difference = sumDifference;
            }
        }
        friends.push(newFriends);

        res.json(matchedFriend);
    });

}