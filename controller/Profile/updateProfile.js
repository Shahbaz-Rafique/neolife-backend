const {connection}=require('../../utils/connection');

async function UpdateProfile(req,response){
    const name=req.body.name;
    const position=req.body.position;
    const abschluss=req.body.abschluss;
    const email=req.body.email;
    const address=req.body.address;
    const telephone=req.body.telephone;
    const id=req.body.id;
    
    connection.query(`UPDATE consultants SET name='${name}',email='${email}',position='${position}',abschluss='${abschluss}',address='${address}',telefon='${telephone}' WHERE Id='${id}'`,(err,res)=>{
        if(err) {
            console.log(err);
        }
        else{
            return response.status(200).json({message:"updated"});
        }
    })
}

module.exports={
    UpdateProfile,
}
