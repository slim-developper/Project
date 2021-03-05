//call mongoose
const mongoose=require('mongoose')

//call config
const config=require('config')
const mongoURI=config.get('mongo-URI')

//connect to database
const connectDB = async ()=>{
//then+catch:asynchrone(async+await)
//req take time
//async pass the next instruction
try {
    mongoose.connect(mongoURI,{useNewUrlParser:true,useUnifiedTopology:true});
    console.log('DATABASE CONNECTED SUCCESSFULLY')
    
} catch (error) {
console.log('DATA BASE ERROR',error)
    
}}

module.exports=connectDB;

//npm i -D config: dev dependencies
//then+catch:asynchrone(async+await)
//req take time
//async pass the next instruction
//npm i -D config: dev dependencies

//npm i -D config: dev dependencies
//password: EWlIRb9FqemrW3yP
//IP-Adress:197.19.211.210/32 