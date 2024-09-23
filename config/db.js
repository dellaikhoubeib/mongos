const mongoose = require('mongoose')

const db =async()=>{
    try{
        

await mongoose.connect(process.env.MongoURL)
console.log('c bon el rabtan bil db : done')



    }catch(err){
        console.log(err)
    }
}
module.exports = db