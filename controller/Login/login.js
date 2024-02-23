const jwt = require('jsonwebtoken');
const crypto = require('crypto');
const {connection}=require('../../utils/connection');

function GenerateToken(user) {
    const payload = {
        id: user.Id,
    };
    const token = jwt.sign(payload, '123456asdfghjkljasjdhgasdyt6rt2376tuasgd');
    return token;
}

async function Login(req,response){
    const email=req.body.email;
    const password = crypto.createHash('sha256').update(req.body.password).digest('hex');
    
    connection.query(`SELECT * FROM consultants WHERE email='${email}' and password='${password}'`,(err,res)=>{
        if(err) {
            console.log(err);
        }
        else{
            if(res.length==0){
                return response.status(200).json({ message: "invalid" });
            }
            else{
                return response.status(200).json({
                    message: 'success',
                    email: email,
                    id:res[0].Id,
                });
            }
        }
    })
}

module.exports={
    Login,
}
