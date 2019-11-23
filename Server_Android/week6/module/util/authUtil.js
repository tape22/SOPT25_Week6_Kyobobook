// authUtil.js
const authUtil = {
    successTrue: (data) => {
        return {
            success: true,
            message: "홈 화면 책 보내기 성공!",
            data: [
                {
                    "bookName":"집에 가고싶다",
                   "author" :"허정민",
                   "bookCover":"C:/Users/USER/Documents/Server_Android/public/images/11.jpg",
                   "star":"4.3",
                    "scrap": "TRUE"
                },
                {
                    "bookName":"집에 가고싶다2",
                   "author" :"허정민",
                   "bookCover":"C:/Users/USER/Documents/Server_Android/public/images/11.jpg",
                   "star":"4.3",
                    "scrap":"FALSE"
                },
                {
                    "bookName":"집에 가고싶다3",
                   "author" :"허정민",
                   "bookCover":"C:/Users/USER/Documents/Server_Android/public/images/11.jpg",
                   "star":"4.3",
                    "scrap":"FALSE"
                }
            ]
        }
    },

    successFalse: () => {
        return {
            success: false,
            message: "책이 존재하지 않습니다.",
            data: null
        }
    },
}
module.exports = authUtil;

// json 형태로 보낼 때 메시지랑 데이터를 묶어서 보내기