var http = require("http");
var url = require("url");
var fs = require("fs");
var path = require("path");

var str;
var fil = fs.readFile(path.join(__dirname, "404.html"), function(err, file) {
	str = file;
});

var server = http.createServer(function(req, res) {
	var pathname = url.parse(req.url).pathname;
	fs.readFile(path.join(__dirname, pathname), function(err, file) {
		if(err) {
			res.writeHead(404);
			res.end(str);
			return;
		}

		res.writeHead(200);
		res.end(file);
	});
});

server.listen(8000);