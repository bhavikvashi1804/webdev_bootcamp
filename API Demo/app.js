const express=require("express");
const https=require("https");

const app=express();


app.get('/',function(req,res){

    var url="https://api.openweathermap.org/data/2.5/weather?q=Surat&appid=60223a0a2655f6c1379ff1b548eefaa6&units=metric";
    https.get(url,function(response){
        console.log(response.statusCode);

        response.on("data",function(data){
            const WeatherData=JSON.parse(data);
            const temp=WeatherData.main.temp;
            const weatherDesc=WeatherData.weather[0].description;
            const icon=WeatherData.weather[0].icon;
            console.log(temp);
            console.log(weatherDesc);

            const imageURL="http://openweathermap.org/img/wn/"+icon+"@2x.png";
            console.log(imageURL);
             

            res.write("<p>The weather is currently "+weatherDesc+"</p>");
            res.write("<h1>The temperature in Surat is "+temp+"*C</h1>");
            res.write("<img src=" + imageURL +">");
            res.send();
        });
    });
    //res.send("Server is runing")
});

app.listen(3000,function(){
    console.log("Server is runing on port 3000.")
});