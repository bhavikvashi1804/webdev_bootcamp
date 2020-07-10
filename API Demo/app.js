const express=require("express");
const https=require("https");

const app=express();


app.get('/',function(req,res){

    var url="https://api.openweathermap.org/data/2.5/weather?q=Surat&appid=60223a0a2655f6c1379ff1b548eefaa6&units=metric";
    https.get(url,function(response){
        console.log(response.statusCode);

        response.on("data",function(data){
            const WeatherData=JSON.parse(data);
            console.log(WeatherData);
        });
    });
    res.send("Server is runing")
});

app.listen(3000,function(){
    console.log("Server is runing on port 3000.")
});