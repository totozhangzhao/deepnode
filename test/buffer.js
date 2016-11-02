var http = require("http");
var helloworld = "";

for(var i = 0; i< 1024*10; i++) {
	helloworld += "a";
}

//helloworld = new Buffer(helloworld);

http.createServer(function(req, res) {
	res.writeHead(200, {"Content-Type": "text/plain"});
	res.end(helloworld);
}).listen(9001);