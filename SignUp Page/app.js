const express=require("express");
const bodyParser=require("body-parser");
const request=require("request");
const cors = require('cors');
const path=require('path');
const e = require("cors");


var app=express();
app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static("public"));


app.get('/',function(req,res){
    res.sendFile(__dirname + '/signup.html');
});

app.post('/',function(req,res){
    var fName=req.body.fName;
    var lName=req.body.lName;
    var email=req.body.email;
    console.log(fName+lName+email);

});

app.listen(3000,function(){
    console.log("Server is runing on port 3000.")
});


