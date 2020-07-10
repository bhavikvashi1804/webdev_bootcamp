const express=require("express");
const https=require("https");
const bodyParser=require("body-parser");

const app=express();
app.use(bodyParser.urlencoded({extended:true}));


app.get('/',function(req,res){
    res.sendFile(__dirname+"/index.html");
});


app.post('/',function(req,res){
    var cityName=req.body.cityName;
    const baseURL="https://api.openweathermap.org/data/2.5/weather?q=";
   
    const apiKey="60223a0a2655f6c1379ff1b548eefaa6";
    const unit="metric";
    var url=baseURL+cityName+"&appid="+apiKey+"&units="+unit;
    https.get(url,function(response){
        console.log(response.statusCode);

        response.on("data",function(data){
            const WeatherData=JSON.parse(data);
            const temp=WeatherData.main.temp;
            const weatherDesc=WeatherData.weather[0].description;
            const icon=WeatherData.weather[0].icon;
           
            const imageURL="http://openweathermap.org/img/wn/"+icon+"@2x.png";
           
            res.write("<p>The weather is currently "+weatherDesc+"</p>");
            res.write("<h1>The temperature in "+cityName+" is "+temp+"*C</h1>");
            res.write("<img src=" + imageURL +">");
            res.send();
        });
    });


});

app.listen(3000,function(){
    console.log("Server is runing on port 3000.")
});


