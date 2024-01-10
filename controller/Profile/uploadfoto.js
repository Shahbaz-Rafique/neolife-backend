const {connection}=require('../../utils/connection');

async function Uploadfoto(req,response){
    const email=req.body.email;
    const file=req.file.filename;
    
    connection.query(`UPDATE consultants SET image='${file}' WHERE email='${email}'`,(err,res)=>{
        if(err) {
            console.log(err);
        }
        else{
            return response.status(200).json({message:"added"});
        }
    })
}

module.exports={
    Uploadfoto,
}
