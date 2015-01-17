var express = require('express');
var _ = require('lodash');

var router = express.Router();

router.data = {
  users: []
};

router.get('/users', function(req, res, next) {
  res.send(router.data.users);
});

router.get('/users/:id', function(req, res, next) {
  var cond = {id: req.params.id};
  var user = _.find(router.data.users, cond);
  res.send(user);
});

module.exports = router;
