const express= require("express");
const bodyParser=require("body-parser");
const { request } = require("express");
const app= express();
//to get the form data
app.use(bodyParser.urlencoded({extended:true}));


app.get('/',function(request,response){
    //console.log(request);
    response.sendFile(__dirname+"/index.html");
    //_dirname automatically find the project dir
});

app.post('/',function(request,response){
    //console.log(request.body);
    //response.send("Thank you for your response");
    var num1=Number(request.body.num1);
    var num2=Number(request.body.num2);
    var result=num1+num2;


    response.send("The result of calculation is: "+result);

    
});




app.listen(3000,function(){
    console.log("Server is running at port 3000");
});