const express= require("express");
const app= express();


app.get('/',function(request,response){
    //console.log(request);
    response.send("<h1>Hello</h1>");
});



app.get('/contact',function(request,response){
    //console.log(request);
    response.send("7359794830");
});


app.get('/about',function(request,response){
    //console.log(request);
    response.send("Bhavik Vashi");
});


app.get('/location',function(request,response){
    //console.log(request);
    response.send("A/8 Janak Vatika Society");
});

app.listen(3000,function(){
    console.log("Server is running at port 3000");
});