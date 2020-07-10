const express=require("express");
const bodyParser=require("body-parser");



const app=express();
app.use(bodyParser.urlencoded({extended:true}));


app.get('/',function(req,res){
   var today=new Date();
   if(today.getDay()===6||today.getDay()===0){
        res.send("This is weekend");
   }
   else{
       res.send("This is workday");
   }
});

app.listen(3000,function(){
    console.log("Server started at 3000 port");
});