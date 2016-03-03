  var routes = require("./routes/router.js"),
		port = process.env.PORT || 5000,
  	 express = require('express'),
         app = express();

app.set("view engine", "ejs");
app.set("views", "./views");

app.use(express.static(__dirname + '/public'));
app.use('/', routes);

app.listen(port, function(){
	console.log("nodejs server listening on port "+ port);
});