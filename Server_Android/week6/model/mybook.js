const statusCode = require('../module/statusCode');
const responseMessage = require('../module/responseMessage');
const authUtil = require('../module/authUtil');
const pool = require('../module/pool');
// 내 서재

const table = 'mybook';
module.exports ={
    selectAll : async({username}) =>{

        const query= `SELECT * FROM ${table} WHERE username = '${username}'`;
        const result = await pool.queryParam_None(query);
        
      
        //username이 DB에 있는 값과 일치하는지 확인-> 아직 못함.
        if(result.length == 0){
            return{
                code: statusCode.BAD_REQUEST,
                json: authUtil.successFalse(responseMessage.MYBOOK_READ_ALL_FAIL)
            };
        }
        console.log(result);

        return{
            code:statusCode.OK,
            json:authUtil.successTrue(responseMessage.MYBOOK_READ_ALL_SUCCESS,result)
            
        };
    }
}