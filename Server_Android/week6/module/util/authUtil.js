// authUtil.js
const authUtil = {
    successTrue: (message,data) => {
        return {
            success: true,
            message: message,
            data : data
        }
    },

    successFalse: (message) => {
        return {
            success: false,
            message: message,
            data: null
        }
    },
}
module.exports = authUtil;

// json 형태로 보낼 때 메시지랑 데이터를 묶어서 보내기