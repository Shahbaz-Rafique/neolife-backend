const jwt = require('jsonwebtoken');
const crypto = require('crypto');
const {connection}=require('../../utils/connection');

async function getProfile(req,response){
    const email=req.query.email;
    
    connection.query(`SELECT * FROM consultants WHERE email='${email}'`,(err,res)=>{
        if(err) {
            console.log(err);
        }
        else{
            return response.status(200).json({data:res});
        }
    })
}

module.exports={
    getProfile,
}
