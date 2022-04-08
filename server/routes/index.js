var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/slow', (req, res, next) => {
  console.log('delay for 3 seconds');
  setTimeout(() => {
    let secs = new Date().getTime();
    res.send({ currentTime: secs})
  }, 3000);
});

module.exports = router;
