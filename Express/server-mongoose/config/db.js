const mongoose =require('mongoose')

mongoose.connect("mongodb+srv://padigelapavani:123456@@@in-aws.tn8is.mongodb.net/")

const connection=mongoose.connection;

connection.on('connected',() =>(console.log("DB connected")))
connection.on('error',()=>(console.log("DB Error")))

module.exports=mongoose

//const db=require('./config/db')