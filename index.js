//Here is code for only json and http form post data
const express=require('express');
//Don't download body parser
const bodyParser = require('body-parser')
const app=express();
const path=require('path');
const port=8000;
//used to convert json data send by azax and fetch(json) request
app.use(bodyParser.json());
///used to convert simple http form data from binary to readable
app.use(bodyParser.urlencoded());
app.get('/',function(req,res){
    res.sendFile(path.join(__dirname, '/index.html'));
})
app.post("/item",(req,res)=>{
    console.log(req.body);
    res.send('<h1>sucess</h1>');
})
app.listen(port,(err)=>{
   if(err){
    console.log("Error in starting server");
   }
   console.log('Server Started');
});