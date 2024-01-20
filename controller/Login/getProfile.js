const {connection}=require('../../utils/connection');

async function getProfile(req,response){
    const id=req.query.id;
    
    connection.query(`SELECT * FROM consultants WHERE Id='${id}'`,(err,res)=>{
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
