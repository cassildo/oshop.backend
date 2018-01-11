var express  = require('express');
var app      = express();

app.use(express.static(__dirname + '/public'));                 // set the static files location /public/img will be /img for users

// application -------------------------------------------------------------
    app.get('*', function(req, res) {
        res.sendfile('./public/index.html'); // load the single view file (angular will handle the page changes on the front-end)
    });

// listen (start app with node server.js) ======================================
app.listen(8080);
console.log("App listening on port 8080");