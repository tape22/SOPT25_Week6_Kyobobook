// home 폴더의 hashtag 폴더의 index 파일입니당~
var express = require('express');
var router = express.Router();

//localhost:3000/home/hashtag 부터 시작!
router.use('/hashtag',require('./hashtag'));

module.exports = router;