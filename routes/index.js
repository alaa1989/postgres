var express = require('express');
var router = express.Router();
var query = require('pg-query');
var path = require('path');
var pg = require('pg');

// --------GET page which is currently our home page--------\\
router.get('/', function(req, res, next) {
    res.sendFile(path.join(__dirname,'../','views','crud.html'));
});

var conString = "postgres://postgres:postgres@localhost/sampleapp1";

//-----------------Add a new record--------------------\\
router.post('/addrecord', function(req, res) {
    var results = [];
    console.log("I got the add request");
    console.log(req.body);
    var data = {name: req.body.name};
    console.log("data.name");

    pg.connect(conString, function(err, client, done) {
        client.query("INSERT INTO namelist(name) values($1)", [data.name]);
        if(err) {
          console.log(err);
      }
      else{
        return res.json([]);
    }
});

});

module.exports = router;
