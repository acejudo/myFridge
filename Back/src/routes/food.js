var express = require('express');
var router = express.Router();
var Food = require("../models/food");

  router.get('/', function(req, res) {
    res.send(
      [{
        title: "Hello World!",
        description: "Hi there! How are you?"
      }]
    )
  });

  // Add new post
  router.post('/food', (req, res) => {
    var db = req.db;
    var title = req.body.title;
    var description = req.body.description;
    var new_food = new Food({
      title: title,
      description: description
    })

    new_food.save(function (error) {
      if (error) {
        console.log(error)
      }
      res.send({
        success: true,
        message: 'Food saved successfully!'
      })
    })
  })
  module.exports = router;