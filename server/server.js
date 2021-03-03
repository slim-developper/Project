//import express
const express=require('express')

const connectDB=require('./config/connectDB')
const user=require('./routes/user')
//create express application
const app=express()

//parse data part of express
app.use(express.json())


//connect to database
connectDB();

//
app.use('/user',user)

//define port
const PORT=process.env.PORT || 8007

//connection to the server
app.listen(PORT,(err)=>
   err
   ? console.log("SERVER ERROR",err)
   : console.log(`SERVER IS RUNNING ON PORT: ${PORT} `)
 );


  
 //npm run dev
//2:34