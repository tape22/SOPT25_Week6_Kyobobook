//{"category": "library"} req로 오면 home의 book.json res하고 send.("ok")
const express = require('express');
const router = express.Router();
const auth = require('../../module/util/authUtil');


// 책장 속의 발견(home상단) 조회하기
router.get('/',async(req,res)=>{
    try{
        const library = req.params;
        console.log(library);
        res.status(200).send();

    }catch(err){
        res.status(500).send('error');
        console.log(err);
        return;
    }
});

module.exports = router;
