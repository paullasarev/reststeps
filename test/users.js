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

describe('REST API for /users', function(){
  before (function(done){
    api.data.users = [srvUser];

    server.listen(port, done);
  });

  after (function(done){
    server.close(done);
  });

  it ('should return list of users', function(done) {
    request.get({url:url, json:true}, function(err, res, body){
      // console.log(body);
      assert.equal(1, body.length);
      var user = body[0];
      assert.ok(user);
      assert.equal(srvUser.name, user.name);
      assert.equal(srvUser.id, user.id);
      assert.equal(srvUser.email, user.email);
      done();
    });

  });

});
