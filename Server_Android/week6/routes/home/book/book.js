//{"category": "library"} req로 오면 home의 book.json res하고 send.("ok")
const express = require('express');
const router = express.Router();
const statusCode = require('../../../module/statusCode');
const responseMessage = require('../../../module/responseMessage');
const authUtil = require('../../../module/authUtil');
const Books = require('../../../model/book');

// 책장 속의 발견(home상단) 조회하기
router.post('/', async(req,res)=>{

    //POSTMAN에서 body->json으로 입력된 값을 가져옴.
    const {category} = req.body;

    // category값 확인
    if(!category){
        res.status(statusCode.BAD_REQUEST)
        .send(authUtil.successFalse(responseMessage.NULL_VALUE));
    }

    try{
        const {code,json} = await Books.selectAll();
        res.status(code).send(json);
    }catch(err){
        console.log(err);
        res.status(statusCode.INTERNAL_SERVER_ERROR).send(authUtil.successFalse(responseMessage.INTERNAL_SERVER_ERROR));    }
});

module.exports = router;