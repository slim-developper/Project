//call mongoose
const mongoose=require('mongoose')
const MONGO_URI = process.env.MONGO_URI;
//call config
const config=require('config')

const dotenv=require('dotenv')
dotenv.config({path:'./config/.env'});
//const mongoURI=config.get('mongo-URI')

//connect to database
const connectDB = async ()=>{
//then+catch:asynchrone(async+await)
//req take time
//async pass the next instruction
try {
    mongoose.connect(MONGO_URI,{useNewUrlParser:true,useUnifiedTopology:true});
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