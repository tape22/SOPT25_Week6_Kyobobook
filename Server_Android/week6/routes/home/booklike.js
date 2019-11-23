//{"usernmae": "lee"} req로 오면 home의 book.json res하고 send.("ok")
const express = require('express');
const router = express.Router();
const auth = require('../../module/util/authUtil');


// 내 취향 책 어쩌구(home상단) 조회하기
router.get('/:username',async(req,res)=>{
    try{
        const {username} = req.params;
        const message =username+"의 취향이 비슷한 사람의 책 조회 성공!";
        const data = [
            {
                "bookName":"호준이형 안드존잘",
                "author" :"호준이형",
            "bookCover":"C:/Users/USER/Documents/Server_Android/public/images/11.jpg",
            "star":"1",
                "scrap":"TRUE"
            },
    
            {
                "bookName":"호준이형 안드존잘(오해의 소지가 있음)",
                "author" :"호준이형",
            "bookCover":"C:/Users/USER/Documents/Server_Android/public/images/11.jpg",
            "star":"4.9",
            "scrap":"TRUE"
            }
        ]
        res.status(200).send(auth.successTrue(message,data));

    }catch(err){
        res.status(500).send('error');
        console.log(err);
        return;
    }
});

module.exports = router;