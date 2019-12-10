const express = require('express');
const router = express.Router();
const statusCode = require('../../../module/statusCode');
const responseMessage = require('../../../module/responseMessage');
const authUtil = require('../../../module/authUtil');
const Mybook = require('../../../model/mybook');

// 나의 책 리스트 조회
router.post('/:username', async(req,res)=>{
    const {username} = req.params;
    console.log({username});

    // username 값이 있는지 확인
    if(!username){
        res.status(statusCode.BAD_REQUEST)
        .send(authUtil.successFalse(responseMessage.NULL_VALUE));
    }
    //username이 일치하는지 확인
    
    // 값 불러오기
    try{
        const {code,json} = await Mybook.selectAll();
        res.status(code).send(json);
    }catch(err){
        console.log(err);
        res.status(statusCode.INTERNAL_SERVER_ERROR).send(authUtil.successFalse(responseMessage.INTERNAL_SERVER_ERROR));    }
});

module.exports = router;