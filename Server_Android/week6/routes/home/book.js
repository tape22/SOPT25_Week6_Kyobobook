//{"category": "library"} req로 오면 home의 book.json res하고 send.("ok")
const express = require('express');
const router = express.Router();
const auth = require('../../module/util/authUtil');


// 책장 속의 발견(home상단) 조회하기
router.post('/',async(req,res)=>{
    try{
        const {category} = req.body;
        if (category == "library"){
            const message ="책장 속의 발견 성공!";
            const response_library = [
            {
                "bookname":"진이, 지니",
                "author" :"정유정",
                "bookcover":"http://image.yes24.com/Goods/73417149/800x0",
                "star":"4.9",
                "scrap": "TRUE"
            },
            {
                "bookname":"뉴스가 들리고 기사가 읽히는 세상 친절한 경제상식",
                "author" :"토리텔러",
                "bookcover":"http://image.kyobobook.co.kr/images/book/large/110/l9788959896110.jpg",
                "star":"4.3",
                "scrap":"FALSE"
            },
            {
                "bookname":"이기적 유전자",
                "author" :"리처드 도킨스",
                "bookcover":"http://image.kyobobook.co.kr/images/book/xlarge/901/x9788932473901.jpg",
                "star":"4.3",
                "scrap":"FALSE"
            }
        ]
        res.status(200).send(auth.successTrue(message,response_library));
        } 
        else{
            res.status(404).send("no category!");
        }    

    }catch(err){
        res.status(500).send('error');
        console.log(err);
        return;
    }
});

module.exports = router;