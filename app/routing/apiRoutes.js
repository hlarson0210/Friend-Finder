var path = require("path");
var friends = require("../data/friends.js");


module.exports = function (app) {
    app.get("/api/friends", function (req, res) {
        return res.json(friends.friends);
    });

    // Create New Friends - takes in JSON input
    app.post("/api/friends", function (req, res) {
        // req.body hosts is equal to the JSON post sent from the user
        // This works because of our body parsing middleware
        var newFriends = req.body;
        let matchedFriend;

        for (obj in friends) {
            let sumDifference = 0;
            for (val in friends[obj].scores) {
                sumDifference += Math.abs(parseInt(friends[obj].scores[val]) - parseInt(newFriend.scores[val]));
            }
            if (!matchedFriend) {
                matchedFriend = friends[obj];
                matchedFriend.difference = sumDifference;
            } else if (matchedFriend.difference > sumDifference) {
                matchedFriend = friends[obj];
                matchedFriend.difference = sumDifference;
            }
        }
        friends.friends.push(newFriends);

        res.json(newFriends);
    });

}