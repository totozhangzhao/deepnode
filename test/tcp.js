// var net = require("net");
// var server = net.createServer(function(socket) {
// 	socket.on("data", function(data) {
// 		socket.write("Hello");
// 	});

// 	socket.on("end", function() {
// 		console.log("连接断开。。。");
// 	});

// 	socket.write("欢迎光临深入浅出Nodejs...");
// });

// server.listen(8214, function() {
// 	console.log("server bound");
// });

var net = require("net");
var server = net.createServer(function(socket) {
	socket.write("Echo server /n");
	socket.pipe(socket);
});
server.listen(1337, "127.0.0.1");