var express = require('express');
var router = express.Router();
var crypto = require('crypto');
var moment = require('moment');
const pulsa = require('../public/data/pulsa.json');
const emoney = require('../public/data/emoney.json');
const pln = require('../public/data/pln.json');
const game = require('../public/data/game.json');
const tagihan = require('../public/data/tagihan.json');
const { compile } = require('morgan');

function randomValueHex(len) {
  return crypto
    .randomBytes(Math.ceil(len / 2))
    .toString('hex') 
    .slice(0, len)
}

router.get('/', function(req, res, next) {
  let data = {
    title : 'PPOB Mybeb', 
    pulsa_data : pulsa, 
    emoney_data : emoney,
    pln_data : pln,
    game_data : game,
    tagihan_data : tagihan
  }
  res.render('index', data);
});

router.get('/invoice/:produk/:id_menu/:id', function(req, res, next ){
  menu = req.params.produk
  id_provider = req.params.id_menu
  id = req.params.id

  if(menu=="pulsa") tes = pulsa.filter(a=> a.id_provider==id_provider);
  if(menu=="emoney") tes = emoney.filter(a=> a.id_provider==id_provider);
  if(menu=="tagihan") tes = tagihan.filter(a=> a.id_provider==id_provider);
  if(menu=="game") tes = game.filter(a=> a.id_provider==id_provider);
  if(menu== "token") tes = pln.filter(a=> a.id_provider==id_provider);

  data_resp = tes[0].list_produk.filter(b => b.id_produk == id);
  invoice_data = randomValueHex(10)
  date = moment().format('DD MMMM YYYY, h:mm:ss a')
  console.log(data_resp)
  
  res.render('invoice',{title : 'PoC Epay Invoice', data : data_resp, invoice : invoice_data, date_trx : date });
})

module.exports = router;
