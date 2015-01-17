var express = require('express');
var router = express.Router();

router.data = {
  users: []
};

/* GET users listing. */
router.get('/users', function(req, res, next) {

  res.send(router.data.users);
});

module.exports = router;
