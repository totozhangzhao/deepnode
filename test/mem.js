// var heapdump = require("heapdump");
// var http = require("http");
// var leakArrayzzZZZZZZZz = [];
// var leak = function() {
// 	leakArray.push("leak" + Math.random());
// };


// http.createServer(function(req, res) {
// 	leak();
// 	res.writeHead(200, {"Content-Type": "text/plain"});
// 	res.end("Hello World!");
// }).listen(1337);

// console.log("Server running at http://localhost:1337");


var fs = require("fs");

var reader = fs.createReadStream("test.js");
var writer = fs.createWriteStream("out.js");
reader.pipe(writer); // 1
// reader.on("data", function(chunk) {
// 	writer.write(chunk);
// });
// reader.on("end", function() {
// 	writer.end();
// }); // 2