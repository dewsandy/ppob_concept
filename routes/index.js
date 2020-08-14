var express = require('express');
var router = express.Router();
const data_file = require('../public/data/data.json');

/* GET home page. */
router.get('/', function(req, res, next) {
  console.log(data_file.data); 
  
  let list_ppob = data_file.data;

  res.render('index', {title : 'expressc', data_ppob : list_ppob});
});

module.exports = router;
