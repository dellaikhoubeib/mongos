const express = require('express')
const app = express()
require('dotenv').config()

const port = process.env.port
const contactRoute = require('./routes/contact')
const db = require('./config/db')

app.use(express.json())
db()
//lina n7ot lien general ely mrbout bi contact iser collection
 app.use('/contact',contactRoute)





app.listen(port,(err)=>{
    err?console.log(err):console.log(`port est => ${port}`)
})