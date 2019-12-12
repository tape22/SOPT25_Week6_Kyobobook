//req로 username (post) 받으면 
const express = require('express');
const router = express.Router();
const authUtil = require('../../../module/authUtil');
const statusCode = require('../../../module/statusCode');
const responseMessage = require('../../../module/responseMessage');

// 해시태그는 그냥 DB로 안빼고 둘까 함.(합의는 안됨)
router.post('/',async(req,res)=>{
    try{
        const {username} = req.body;
        const message =username+"랜덤 해시태그";
        const response_hash = [
            {"image": "https://pds.joins.com/news/component/htmlphoto_mmdata/201904/05/8c5dbe76-9a59-41dd-90a2-87e9433f2116.jpg", 
            "main_keyword": "등불/페스티벌", 
            "keywords": "#감성 #축제 #연말 페스티벌 #가족,애인,친구와 같이" }
        ]
        res.status(200).send(authUtil.successTrue(message,response_hash));

    }catch(err){
        res.status(statusCode.INTERNAL_SERVER_ERROR).send(authUtil.successFalse(responseMessage.INTERNAL_SERVER_ERROR)); 
        console.log(err);
        return;
    }
});

module.exports = router;
