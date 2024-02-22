const {connection}=require('../../utils/connection');

async function getClients(req,response){
    connection.query(`SELECT * FROM PDF`,(err,res)=>{
        if(err) throw err;
        else{
            connection.query('SELECT * FROM policies',(err,result)=>{
                if(err) throw err;
                else{
                    return response.status(200).json({data:res,policies:result});
                }
            })
        }
    })
}

module.exports={
    getClients,
}
