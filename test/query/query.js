var http = require("http");
var url = require("url");
var querystring = require("querystring");

var parseCookie = function(cookie) {
	var cookies = {};
	if(!cookie) {
		return cookies;
	}

	var list = cookie.split(";");
	for(var i = 0; i< list.length; i++) {
		var pair = list[i].split("=");
		cookies[pair[0].trim()] = pair[1];
	}

	return cookies;
};

http.createServer(function(req, res) {
	//var query = querystring.parse(url.parse(req.url).query);
	//var query = url.parse(req.url, true).query;

	req.cookies = parseCookie(req.headers.cookie);
	if(req.cookies.a) {
		console.log("yes");
	}else {
		console.log("no");
	}
	//console.log(query);
	res.end();
}).listen(5555);