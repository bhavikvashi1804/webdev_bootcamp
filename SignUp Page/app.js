const express=require("express");
const bodyParser=require("body-parser");
const request=require("request");

const app=express();
app.use(bodyParser.urlencoded({extended:true}));


app.get('/',function(req,res){
    res.send("Server is runing");
});



app.listen(3000,function(){
    console.log("Server is runing on port 3000.")
});


