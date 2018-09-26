var express = require('express');
var router = express.Router();

  router.get('/', function(req, res) {
    res.send(
      [{
        title: "Hello World!",
        description: "Hi there! How are you?"
      }]
    )
  });

  module.exports = router;