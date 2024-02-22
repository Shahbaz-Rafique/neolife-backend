const crypto = require('crypto');
const {connection}=require('../../utils/connection');
const strftime = require('strftime');

async function AddConsultant(req,response){
    const name=req.body.name;
    const position=req.body.position;
    const abschluss=req.body.abschluss;
    const email=req.body.email;
    const address=req.body.address;
    const telephone=req.body.telephone;
    const file=req.file.filename;
    const admin=req.query.admin=="true"?true:false;
    const now = new Date();
    const dateCreated = strftime('%Y-%m-%d %H:%M:%S', now);
    const password = crypto.createHash('sha256').update(req.body.password).digest('hex');

    const data={
        name:name,
        position:position,
        abschluss:abschluss,
        email:email,
        address:address,
        telefon:telephone,
        password:password,
        image:file,
        createdAt:dateCreated,
        isAdmin:admin,
    }
    
    connection.query(`INSERT INTO consultants SET ?`,data,(err,res)=>{
        if(err) {
            console.log(err);
        }
        else{
            return response.status(200).json({
                message: 'added',
            });
        }
    })
}

module.exports={
    AddConsultant,
}
