var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/users', function(req, res, next) {
  var users = [
    {
      id: 1234,
      name: 'user 1',
      emain: 'name1@my.com'
    }
  ];

  res.send(users);
});

module.exports = router;
