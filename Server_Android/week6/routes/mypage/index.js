//mypage 폴더의 index
var express = require('express');
var router = express.Router();


router.use('/mybook',require('./mybook'));

module.exports = router;
