//req로 username (post) 받으면 
const express = require('express');
const router = express.Router();
const auth = require('../../../module/util/authUtil');


// 해시태그 랜덤랜덤~
router.post('/',async(req,res)=>{
    try{
        const {username} = req.body;
        const message =username+"랜덤 해시태그!";
        const response_hash = [
            {"image": "Server_Android/week6/public/images/cat.JPG", 
            "main_keyword": "라랄라/맛집 추천해줘요", 
            "keywords": "#배고파 #술마시고 싶어 #학교가기싫어 #으아아앙아아ㅏ #서팟장님 쿼카" }
        ]
        res.status(200).send(auth.successTrue(message,response_hash));

    }catch(err){
        res.status(500).send('error');
        console.log(err);
        return;
    }
});

module.exports = router;
