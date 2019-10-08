var express = require("express");
var path = require("path");
var app = express();
var PORT = 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());


exports.home = app.get("/", function (req, res) {
    res.sendFile(path.join(__dirname, "../public/home.html"));
});

exports.survey = app.get("/survey", function (req, res) {
    res.sendFile(path.join(__dirname, "../public/survey.html"));
});

exports.listen = app.listen(PORT, function () {
    console.log("App listening on PORT " + PORT);
});