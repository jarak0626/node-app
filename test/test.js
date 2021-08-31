var request = require('supertest');
var app = require('../index.js');
print "Running test";

describe('GET /', function() {
	it('respond with hello world', function(done) {

		//navigate to root to check the response is "hello world"
		request(app).get('/').expect('hello world', done);
	});
});
