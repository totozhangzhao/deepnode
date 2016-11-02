var fs = require("fs");
var promise = require("promise");

fs.readdir("test", function(err, files) { 
	files.forEach(function(fileName, index) { 
		fs.readFile("test/" + fileName, "utf-8", function(err, data) {
			if(err) {
				console.log(err);
			}else {
				console.log(data);
			}
		});
	});
});