var Firebase = require('firebase'),
	firebase = new Firebase("https://bia.firebaseio.com/"),
	  router = require("express").Router(),
  bodyParser = require('body-parser'),	  
      logger = require('morgan');

router.use(logger('tiny'));

router.get('/', function(req, res){
/*	firebase.child("designers").on("value", function(snapshot, prevChildKey) {
		var object = [];
	  	snapshot.forEach(function(data) {
	  		console.log(data.val());
			data.forEach(function(snap){
				object.push(snap);
				//console.log(snap.val());
			});
		});*/
		//console.log(object);
		res.render('index',{});
	//});
});

module.exports = router;