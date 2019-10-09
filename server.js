var express = require("express");
var path = require("path");
var app = express();
var PORT = process.env.PORT || 3000;
var htmlPages = require("./app/routing/htmlRoutes.js")
var apiRoute = require("./app/routing/apiRoutes.js");



app.use(express.urlencoded({ extended: true }));
app.use(express.json());


// Calls in the html pages and connection
htmlPages(app);

// Calls in the api route
apiRoute(app);


app.listen(PORT, function () {
    console.log("App listening on PORT " + PORT);
});



