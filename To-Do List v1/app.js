const express=require("express");
const bodyParser=require("body-parser");

const date=require(__dirname+"/date.js");



const app=express();
app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static("public"));

app.set('view engine','ejs');


var item=[];
var workItems=[];

app.get('/',function(req,res){

   
    var day=date();
    res.render('lists', {todayIsDay: day,itemArray:item});
});

app.get('/work',function(req,res){
     res.render('lists', {todayIsDay: "Work List",itemArray:workItems});
});

app.post('/',function(req,res){

    console.log(req.body);

    if(req.body.button=="Work"){
        var item1=req.body.taskName;
        workItems.push(item1);
        res.redirect("/work");
    }
    else{
        var item1=req.body.taskName;
        item.push(item1);
        res.redirect("/");
    }

    
});

app.post('/work',function(req,res){
    var item1=req.body.taskName;
    workItems.push(item1);
    res.redirect("/work");
});


app.get('/about',function(req,res){
    res.render('about');
});

app.listen(3000,function(){
    console.log("Server started at 3000 port");
});