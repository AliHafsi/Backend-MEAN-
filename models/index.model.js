const mongoose=require('mongoose');
const Schema=mongoose.Schema
newSchema=newSchema({
    name:String,
    email:String,
    password:String

})
module.exports=mongoose.model ('User',newSchema)