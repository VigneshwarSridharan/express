var express = require('express');
var router = express.Router();
// var MongoClient = require('mongodb').MongoClient;


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/sample', function(req, res, next) {
  res.render('sample', { title: 'Express' });
});

router.post('/sample', function(req, res) {
  global.db.collection('submit').save(req.body, (err, result) => {
    res.send('ok');
  })
  // var name = req.body.name;
  // var lastname = 'Sridharan';
  // var fullname = name.concat(lastname);
  // res.send(fullname);
});

router.get('/view',(req, res) => {
  global.db.collection('movie').find().toArray(function(err, result) {
    console.log(result);
    res.render('view',{data : result});
  });
});

router.get('/test',function(req, res, next) {
  res.render('test', {name: 'Express framwork'});
});

module.exports = router;
