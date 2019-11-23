// routes의 index 파일입니당~

var express = require('express');
var router = express.Router();


router.use('/home',require('./home'));

module.exports = router;
