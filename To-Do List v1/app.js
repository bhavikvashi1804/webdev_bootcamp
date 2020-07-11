const express=require("express");
const bodyParser=require("body-parser");



const app=express();
app.use(bodyParser.urlencoded({extended:true}));
app.set('view engine','ejs');


var item="";

app.get('/',function(req,res){

    var today=new Date();
    var options={
        weekday:"long",
        day:"numeric",
        month:"long"
    };

    var day=today.toLocaleDateString("en-US",options);
    res.render('lists', {todayIsDay: day,newListItem:item});
});

app.post('/',function(req,res){
    item=req.body.taskName;
    res.redirect("/");
});

app.listen(3000,function(){
    console.log("Server started at 3000 port");
});