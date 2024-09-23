const contactSchema = require('../model/contact')

exports.getallContact=async(req,res)=>{
    try{
 
 const mesContacts = await contactSchema.find()
 res.status(200).send({msg:"voici la listes de tes contacts",mesContacts})
 
 
 }catch(err){
         console.log(err)
        }
}

exports.addContact=async(req,res)=>{
    try{

const newContact = new contactSchema(req.body)

 await newContact.save()

res.status(200).send({msg:"you added ur contact user",newContact})

    }catch(err){
        console.log(err)
    }
}

exports.update=async(req,res)=>{
    try{
        const {id} =req.params

        const updatedUser = await contactSchema.findByIdAndUpdate(id,{$set:{...req.body}})
   
      res.status(200).send({msg:"sar el upodate go check it fil get route"})
   
    }catch(err){
        console.log(err)
    }
}

exports.getunique=async(req,res)=>{
    try{
    const {id} =req.params

 const getUniqueUser= await contactSchema.findById(id)
res.status(200).send({msg:'voici ton user',getUniqueUser})

    }catch(err){
        console.log(err)
    }
}

exports.removecontact=async(req,res)=>{
    try{
        const {id} =req.params

        const detContact = await contactSchema.findByIdAndDelete(id)
        res.status(200).send({msg:'el contact tfesekh chouf el collevction'})
    }catch(err){
        console.log(err)
    }
}