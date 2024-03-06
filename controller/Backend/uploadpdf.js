const {connection}=require('../../utils/connection');

async function UploadPDF(req,response){
    const file=req.file.filename;
    const id=req.query.Id;
    const email=req.query.email;

    connection.query(`SELECT * FROM PDF WHERE email='${email}' and consultantid='${id}'`,(err,res)=>{
        if(err) throw err;
        else{
            if(res.length==0){
                const data={
                    file:file,
                    consultantId:id,
                    email:email
                }

                connection.query('INSERT INTO PDF SET ?',data,(err,res)=>{
                    if(err) throw err;
                    else{
                        return response.status(200).json({message:"added"});
                    }
                })
            }
            else{
                connection.query(`UPDATE PDF SET file='${file}' where email='${email}' and consultantid='${id}'`,(err,res)=>{
                    if(err) throw err;
                    else{
                        return response.status(200).json({message:"added"});
                    }
                })
            }
        }
    })
}

module.exports={
    UploadPDF,
}
