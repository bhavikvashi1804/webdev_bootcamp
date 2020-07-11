const express=require("express");
const bodyParser=require("body-parser");



const app=express();
app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static("public"));

app.set('view engine','ejs');


var item=[];

app.get('/',function(req,res){

    var today=new Date();
    var options={
        weekday:"long",
        day:"numeric",
        month:"long"
    };

    var day=today.toLocaleDateString("en-US",options);
    res.render('lists', {todayIsDay: day,itemArray:item});
});

app.post('/',function(req,res){
    var item1=req.body.taskName;
    item.push(item1);
    res.redirect("/");
});

app.listen(3000,function(){
    console.log("Server started at 3000 port");
});