'use strict';
var firebaseRef = new Firebase("https://bia.firebaseio.com/"),
     loadingDiv = $('.loading'), 
            BIA =  new BiaApp('bia'),
     htmlMarkUp = "",
     collection = [],
    cart = new shoppingCart("BiaApp");

loadingDiv.html("Data loading.....");

function BiaApp(x){
	this.appName = x;
	this.appData = {};
};

BiaApp.prototype.loop = function(o) {
	
    jQuery.each(o, function(k, d){
		 jQuery.each(d.collection, function(k, v){
		  	 BIA.pushItem(v,collection);
		});
	});
	return collection;
};
BiaApp.prototype.pushItem = function(i,p){
	return p.push(i);
}
BiaApp.prototype.makeHTMLItem = function(i,p){
	return jQuery.each(i, function(k, v){
		htmlMarkUp += "<p>" + v.description +"</p>" + "<img src=" + v.image + " alt='image'/>" +
		"<button type='button' onclick='BIA.handleClick(\"" + v.dateAdded +', ' + v.title + ', ' + v.price + ', ' + '1' + ', ' + v.image + "\");'>Buy Now</button>";
	});
	//BIA.renderHTML(htmlMarkUp, view);
}
BiaApp.prototype.renderHTML = function(da,di){
	document.querySelector('' + di).innerHTML = da;
};
BiaApp.prototype.handleClick = function(x) {
	var s = x.split(','),
	   sk = s[0],n = s[1],p = s[2],q = s[3],i = "" + s[4] + s[5];
	return cart.addItem(sk,n,p,q,i);
};
BiaApp.prototype.findItem = function(s){
	for (var i = 0; i < Object.keys(collection).length; i++) {
		if (i.title === s) {
			return collection[i];
		}
	   return null;
	}
}
firebaseRef.child('designers').on('value', function(snapshot) {
   		loadingDiv.html("data loaded");
   		console.log(BIA.loop(snapshot.val()));
   		BIA.makeHTMLItem(collection,this);
   		BIA.renderHTML(htmlMarkUp, "#view");
});
