const express= require("express");
const bodyParser=require("body-parser");
const { request } = require("express");
const app= express();
app.use(bodyParser.urlencoded({extended:true}));


app.get('/',function(request,response){
    response.sendFile(__dirname+"/bmiCal.html");
});

app.post('/',function(request,response){
   
    var weight=Number(request.body.weight);
    var height=Number(request.body.height);
    var result=((weight/(height*height))*703);


    response.send("Your BMI score is :   "+result);

    
});




app.listen(3000,function(){
    console.log("Server is running at port 3000");
});