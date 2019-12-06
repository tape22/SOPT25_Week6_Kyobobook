//req로 username (post) 받으면 
const express = require('express');
const router = express.Router();
const auth = require('../../../module/util/authUtil');


// 해시태그 랜덤랜덤~
router.post('/',async(req,res)=>{
    try{
        const {username} = req.body;
        const message =username+"랜덤 해시태그";
        const response_hash = [
            {"image": "https://pds.joins.com/news/component/htmlphoto_mmdata/201904/05/8c5dbe76-9a59-41dd-90a2-87e9433f2116.jpg", 
            "main_keyword": "등불/페스티벌", 
            "keywords": "#감성 #축제 #연말 페스티벌 #가족,애인,친구와 같이" }
        ]
        res.status(200).send(auth.successTrue(message,response_hash));

    }catch(err){
        res.status(500).send('error');
        console.log(err);
        return;
    }
});

module.exports = router;
