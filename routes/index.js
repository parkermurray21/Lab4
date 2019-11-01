var express = require('express');
var router = express.Router();
var request = require('request');

/* GET home page. */
router.get('/owl', function(req, res, next) {
  console.log("In owl route");
  console.log(req.query['q']);
  console.log(req.params);
  var owlrest = "https://owlbot.info/api/v1/dictionary/"+ req.query.q + "?format=json";
  console.log(owlrest);
  request(owlrest).pipe(res);
  
  
});

router.get('/cities', function(req, res, next){
  console.log("inside weather route");
  console.log(req.query['q']);
  //console.log(req.params);
  var citiesRest = "http://bioresearch.byu.edu/cs260/jquery/getcity.cgi?q=" + req.query.q;
  console.log(citiesRest);
  request(citiesRest).pipe(res);
  
});

module.exports = router;
