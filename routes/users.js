var express = require('express');
var router = express.Router();
let productHelper = require('../helpers/product_helper');

/* GET home page. */
router.get('/',async function(req, res, next) {
  //let user = req.session.user
  //let productList=await productHelper.getAllProducts()
  
  res.render('index', { title: 'Express' });
});

module.exports = router;
