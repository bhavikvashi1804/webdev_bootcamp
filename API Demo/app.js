const express=require("express");

const app=express();


app.get('/',function(req,res){
    res.send("Server is runing")
});

app.listen(3000,function(){
    console.log("Server is runing on port 3000.")
});