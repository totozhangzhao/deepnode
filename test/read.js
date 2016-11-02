// var fs = require("fs");
// var iconv = require("iconv-lite");
// var chunks = [];
// var size = 0;
// var reader = fs.createReadStream("read.md");
// reader.on("data", function(chunk) {
// 	chunks.push(chunk);
// 	size += chunk.length;
// });
// reader.on("end", function() {
// 	var buf = Buffer.concat(chunks, size);
// 	var str = iconv.decode(buf, "utf-8");
// 	console.log(str);
// });
