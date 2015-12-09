var http = require('http');
var fs = require('fs');

var server =  http.createServer(function (request, response) {
	for (var i = 0; i < 5; i++) {
		var file = "sync-txt" + i + ".txt";
		var out = fs.writeFileSync(file, "Hello Node.js!");
		console.log(out);
	};
});

server.listen(3000, function(){
	console.log("Servidor http de pé.");
});

