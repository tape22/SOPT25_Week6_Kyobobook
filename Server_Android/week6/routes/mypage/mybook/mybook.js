const express = require('express');
const router = express.Router();
const statusCode = require('../../../module/statusCode');
const responseMessage = require('../../../module/responseMessage');
const authUtil = require('../../../module/authUtil');
const Mybook = require('../../../model/mybook');

// 내 서재 조회

router.get('/:username', async(req,res)=>{
    const {username} = req.params;
    console.log({username});

    // username 값이 있는지 확인
    if(!username){
        res.status(statusCode.BAD_REQUEST)
        .send(authUtil.successFalse(responseMessage.NULL_VALUE));
    }

    // 값 불러오기
    try{
        const {code,json} = await Mybook.selectAll({username});
        res.status(code).send(json);
    }catch(err){
        console.log(err);
        res.status(statusCode.INTERNAL_SERVER_ERROR).send(authUtil.successFalse(responseMessage.INTERNAL_SERVER_ERROR));    }
});

module.exports = router;
