var express = require('express');
var bodyParser = require('body-parser');
var path = require("path");
var methodOverride = require('method-override');

var PORT = process.env.PORT || 3000;

var app = express();

// Serve static content for the app from the 'public' directory
app.use(express.static(process.cwd() + '/public'));

app.use(bodyParser.urlencoded({ extended: false }));

// Override with POST having ?_method=DELETE
app.use(methodOverride('_method'));

//--------------Set Handlebars as the view engine-----------------
var expHbs = require('express-handlebars');
app.engine('handlebars', expHbs({ defaultLayout: 'main' }));
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'handlebars');

// Import routes and give the server access to them
var routes = require('./controllers/burgers_controller.js');

app.use('/', routes);

app.listen(PORT, function() {

  console.log("Server listening on: http://localhost:" + PORT);
});
