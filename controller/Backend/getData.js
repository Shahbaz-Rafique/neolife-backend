const {connection}=require('../../utils/connection');

async function getData(req,response){
    const email=req.query.email;

    connection.query(`SELECT * FROM Data WHERE email='${email}'`,(err,res)=>{
        if(err) throw err;
        else{
            return response.status(200).json({data:res});
        }
    })
}

module.exports={
    getData,
}
