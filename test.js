'use strict';

var chai = require('chai');
var expect = require('chai').expect;
require('./vanillaHTTPServer/server');
var http = require('http');
var chaiHTTP = require('chai-http');
chai.use(chaiHTTP);

describe('vanilla HTTP server should give time or greet person by name', function(){
	it('should greet someone by name when GET/greet', function(done){
		chai.request('localhost:4000/greet')
			.get('/dexter')
			.end(function(err, res){
				if(err) {return err};
				expect(res.status).to.eql(200);
				expect(res.text).to.eql('hello, dexter');
			done();
		});	
	});

	it('should give back time when GET/time', function(done){
		chai.request('localhost:4000')
			.get('/time')
			.end(function(err, res) {
				if(err) {return err};
				expect(res.status).to.eql(200);
				done();
			});
	});
});
