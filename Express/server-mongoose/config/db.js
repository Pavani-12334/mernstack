const mongoose =require('mongoose')

mongoose.connect("mongodb+srv://padigelapavani:123456123456@in-aws.tn8is.mongodb.net/max-store?retryWrites=true&w=majority&appName=In-AWS")

const connection=mongoose.connection;

connection.on('connected',() =>(console.log("DB connected")))
connection.on('error',()=>(console.log("DB Error")))

module.exports=mongoose

//const db=require('./config/db')