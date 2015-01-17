var request = require('request');
var assert = require('assert');
var app = require('../app');
var http = require('http');

var server = http.createServer(app);
var port = 3001;
var url = 'http://localhost:' + port + '/api/users';
var name1 = 'user 1';

describe('REST API for /users', function(){
  before (function(done){
    server.listen(port, done);
  });

  after (function(done){
    server.close(done);
  });

  it ('should return list of users', function(done) {
    request.get({url:url, json:true}, function(err, res, body){
      assert.equal(1, body.length);
      assert.equal(name1, body[0].name);
      done();
    });

  });



});