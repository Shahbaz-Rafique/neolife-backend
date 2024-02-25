const {connection}=require('../../utils/connection');

async function UploadPDF(req,response){
    const file=req.file.filename;
    const id=req.query.Id;
    const email=req.query.email;

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

module.exports={
    UploadPDF,
}
