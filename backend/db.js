const mongoose =require('mongoose')

const users = mongoose.model('users',{
    
    id:Number,
    ward:Number,
    first_name:String,
    last_name:String,
    email:String,
    phone:String

})

module.exports ={users}