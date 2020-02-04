var express = require("express");
var burger = require("../models/burger.js");
var router = express.Router();

router.get('/', function(req, res) {
  burger.selectAll(function(data) {
    var hbsObject = {
      burgers: data
    };
    res.render('index', hbsObject);
  });
});

router.post('/burgers', function(req, res) {
  burger.insertOne([
    'burger_name'
  ], [
    req.body.burger_name
  ], function(data) {
    res.redirect('/');
  });
});

router.put('/burgers/:id', function(req, res) {
  var condition = 'id = ' + req.params.id;
  burger.updateOne({
    devoured: true
  }, condition, function(data) {
    res.redirect('/');
  });
});

//--------------Export routes---------------------------------
module.exports = router;