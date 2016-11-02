var tls = require("tls");
var fs = require("fs");

var options = {
	key: fs.readFileSync("./client.key"),
	cert: fs.readFileSync("./client.crt"),
	ca: [fs.readFileSync("./ca.crt")]
};

var stream = tls.connect(9000, options, function() {
	console.log("client connected", stream.authorized ? "authorized" : "unthorized");
	process.stdin.pipe(stream);
});

stream.setEncoding("utf-8");
stream.on("data", function(dta) {
	console.log(data);
});
stream.on("end", function() {
	server.close();
});