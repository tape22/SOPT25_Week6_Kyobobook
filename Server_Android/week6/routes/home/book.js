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
                "bookname":"집에 가고싶다1",
                "author" :"허정민",
                "bookcover":"Server_Android/week6/public/images/11.jpg",
                "star":"4.3",
                "scrap": "TRUE"
            },
            {
                "bookname":"집에 가고싶다2",
                "author" :"허정민",
                "bookcover":"Server_Android/week6/public/images/cat.jpg",
                "star":"4.3",
                "scrap":"FALSE"
            },
            {
                "bookname":"집에 가고싶다3",
                "author" :"허정민",
                "bookcover":"Server_Android/week6/public/images/Roma.jpg",
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