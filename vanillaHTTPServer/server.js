'use strict';
 
var http = require('http');

var server = http.createServer(function(req, res) {

	if(req.url === '/time') {
		var now = new Date().toString();
		res.writeHead(200, {
			'Content-Type': 'text/plain'
		});
		res.write(now);
		return res.end();
	}

	var url = req.url.toString();
	var name = url.substring(7); 

	if(req.url === url && req.method === "GET"){
		res.writeHead(200, {"Content-Type" : "text/plain"});
		res.write('hello, ' + name);
		return res.end();
	}

	if(req.url ==='/greet' && req.method === 'POST') {  
		var parsed = '';
		req.on('data', function(data){
			parsed = JSON.parse(data);
		});
		res.writeHead(200, {"Content-Type": "application/json"});
		res.write(parsed.name);
		return res.end();
	}

	res.writeHead(404, {
		'Content-Type': 'text/plain'
	});
	res.write('page not found');
	res.end();	
})

server.listen(4000, function() {
	console.log('server is running on port 4000')
});



//It should also respond to a get request to /greet/name where name is any single word string. It should send back a string that greets that name.

//It should also have a separate post request to /greet that takes the name in JSON format.

//There should be tests using chaiHTTP for both routes, as well as a Gruntfile/package.json
