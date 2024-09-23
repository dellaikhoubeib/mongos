const mongoose = require('mongoose')


const contactSchema = mongoose.Schema({

   name:{
  type:String,
  required:true
}  ,
email:{
    type:String,
    required:true,
    unique:true
},
mobile:{
    type:Number
}


})

module.exports = mongoose.model('Contacte',contactSchema)