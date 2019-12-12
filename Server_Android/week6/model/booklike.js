const statusCode = require('../module/statusCode');
const responseMessage = require('../module/responseMessage');
const authUtil = require('../module/authUtil');
const pool = require('../module/pool');
// 내 취향과 비슷한 사람

const table = 'booklike';
module.exports ={
    selectAll : async({username}) =>{
    
        const query= `SELECT * FROM ${table} WHERE username = '${username}'`;
        const result = await pool.queryParam_None(query);

        // var test = result.filter(function(te){
        //     return te.username == "jungmin"
        // });

        // console.log(test[0].username);

        //username이 DB에 있는 값과 일치하는지 확인-> 아직 구현 못함.
        if(!result){
            return{
                code: statusCode.BAD_REQUEST,
                json: authUtil.successFalse(responseMessage.BOOKLIKE_READ_ALL_FAIL)
            };
        }

        return{
            code:statusCode.OK,
            json:authUtil.successTrue(responseMessage.BOOKLIKE_READ_ALL_SUCCESS,result)
            
        };
    }
}