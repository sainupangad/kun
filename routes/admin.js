var express = require('express');
var router = express.Router();
let productHelper = require('../helpers/product_helper')

/* GET users listing. */


router.get('/add-product', function (req, res, next) {

  res.render('admin/add-products');
});

router.post('/add-product', function (req, res) {
  
  let addProduct = productHelper.addProduct(req.body)
  addProduct.then((product)=>{
    console.log(product);
  })

  
  
  res.render('index', { title: 'Express' });

})

module.exports = router;
