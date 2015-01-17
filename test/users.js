var request = require('request');
var assert = require('assert');
var http = require('http');
var app = require('../app');
var api = app.get('api');

var server = http.createServer(app);
var port = 3001;
var url = 'http://localhost:' + port + '/api/users';
var srvUser = {
  id: 1234,
  name: 'user 1',
  emain: 'name1@my.com'
};

var srvUser2 = {
  id: 2234,
  name: 'user 2',
  emain: 'name2@my.com'
};

describe('REST API for /users', function(){
  before (function(done){
    api.data.users = [srvUser, srvUser2];

    server.listen(port, done);
  });

  after (function(done){
    server.close(done);
  });

  it ('should return list of users', function(done) {
    request.get({url:url, json:true}, function(err, res, body){
      // console.log(body);
      assert.equal(2, body.length);
      var user = body[0];
      assert.ok(user);
      assert.equal(srvUser.name, user.name);
      assert.equal(srvUser.id, user.id);
      assert.equal(srvUser.email, user.email);
      done();
    });

  });

  it ('should get user by id', function(done){

    request.get({url:url+'/1234', json:true}, function(err, res, body){
      var user = body;
      assert.ok(user);
      assert.equal(srvUser.name, user.name);
      assert.equal(srvUser.id, user.id);
      assert.equal(srvUser.email, user.email);
      done();
    });

  });

});
