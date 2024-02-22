const {connection}=require('../../utils/connection');

async function getPolicy(req,response){
    connection.query(`SELECT * FROM policies`,(err,res)=>{
        if(err) throw err;
        else{
            return response.status(200).json({data:res});
        }
    })
}

module.exports={
    getPolicy,
}
