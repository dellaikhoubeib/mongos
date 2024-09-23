const express = require('express')

const contactRoute = express.Router()
const {getallContact,addContact,update,getunique,removecontact} =require('../controllers/contact')
// route get all contacts 


  contactRoute.get('/',getallContact)



//route add contact 
contactRoute.post('/add',addContact)


//route update contact 
contactRoute.put('/:id',update)


//route get unique contact 
contactRoute.get('/:id',getunique)

//route delete contact 
contactRoute.delete('/:id',removecontact)

module.exports = contactRoute