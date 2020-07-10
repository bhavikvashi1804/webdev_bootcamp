const express= require("express");
const app= express();


app.get('/',function(request,response){
    //console.log(request);
    response.sendFile(__dirname+"/index.html");
    //_dirname automatically find the project dir
});


app.listen(3000,function(){
    console.log("Server is running at port 3000");
});