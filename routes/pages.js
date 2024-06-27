const express=require('express');
const router = express.Router();

router.get('/', function(req, res){
      res.render('index');
});
router.get('/login', function(req, res){
    res.render('login');
});
router.get('/signup', function(req, res){
    res.render('signup');
});
router.get('/gridsclo', function(req, res){
    res.render('gridsclo');
});
router.get('/gridshoes', function(req, res){
    res.render('gridshoes');
});


module.exports = router;