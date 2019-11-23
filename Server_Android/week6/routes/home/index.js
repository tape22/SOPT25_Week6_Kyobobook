// home 폴더의 index 파일입니당~
var express = require('express');
var router = express.Router();

//localhost:3000/home이 기본 값인 상태
router.use('/book',require('./book'));
router.use('/booklike',require('./booklike'));

module.exports = router;
