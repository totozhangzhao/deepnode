var crypto = require("crypto");
var val = crypto.createHash("sha1").update("123").digest("base64");
console.log(val); 