const statusCode = require('../module/statusCode');
const responseMessage = require('../module/responseMessage');
const authUtil = require('../module/authUtil');
const pool = require('../module/pool');
// 내 취향과 비슷한 사람

const table = 'booklike';
module.exports ={
    selectAll : async({username}) =>{
        const user = `'${username}'`;
        const result = await pool.queryParam_None(`SELECT * FROM ${table} WHERE username = ${user}`);
       
        if(result.length == 0){
            return{
                code: statusCode.BAD_REQUEST,
                json: authUtil.successFalse(responseMessage.BOOKLIKE_READ_ALL_FAIL)
            };
        }else{
            return{
            code:statusCode.OK,
            json:authUtil.successTrue(responseMessage.BOOKLIKE_READ_ALL_SUCCESS,result)
            
        };
        }

        
    }
}