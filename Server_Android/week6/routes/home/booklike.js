//{"usernmae": "lee"} req로 오면 home의 book.json res하고 send.("ok")
const express = require('express');
const router = express.Router();
const auth = require('../../module/util/authUtil');


// 내 취향 책 어쩌구(home상단) 조회하기 localhost:3000/home/book/내이름
router.get('/:username',async(req,res)=>{
    try{
        const {username} = req.params;
        const message =username+"의 취향이 비슷한 사람의 책 조회 성공!";
        const response_taste = [
            {
                "bookname":"엄마를 부탁해",
                "author" :"신경숙",
            "bookcover":"Shttp://image.kyobobook.co.kr/images/book/xlarge/673/x9788936433673.jpg",
            "star":"4",
                "scrap":"TRUE"
            },
    
            {
                "bookname":"소프트웨어 공학",
                "author" :"Ian Sommerville",
            "bookcover":"http://image.kyobobook.co.kr/images/book/xlarge/660/x9788964212660.jpg",
            "star":"4.1",
            "scrap":"FALSE"
            },

            {
                "bookname":"멋진 신세계",
                "author" :"올더스 헉슬리",
            "bookcover":"http://image.kyobobook.co.kr/images/book/xlarge/581/x9788931003581.jpg",
            "star":"4.6",
            "scrap":"TRUE"
            }
        ]
        res.status(200).send(auth.successTrue(message,response_taste));

    }catch(err){
        res.status(500).send('error');
        console.log(err);
        return;
    }
});

module.exports = router;