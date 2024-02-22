const {connection}=require('../../utils/connection');

async function AddPolicy(req,response){
    const policy=req.body.type;
    const file=req.file.filename;
    const id=req.body.id;
    const email=req.body.email;

    connection.query(`SELECT * FROM policies WHERE consultantId='${id}'`,(err,res)=>{
        if(err) throw err;
        else{
            if(res.length==0){
                const data={
                    consultantId:id,
                    email:email,
                    [policy]:file
                }
                connection.query('INSERT INTO policies SET ?',data,(err,resl)=>{
                    if(err) throw err;
                    else{
                        return response.status(200).json({message:"added"});
                    }
                })
            }
            else{
                connection.query(`UPDATE policies SET ${policy}='${file}' WHERE consultantId='${id}'`,(err,res)=>{
                    if(err) {
                        console.log(err);
                    }
                    else{
                        return response.status(200).json({message:"added"});
                    }
                })
            }
        }
    })
}

module.exports={
    AddPolicy,
}
