const express=require("express");
const bodyParser=require("body-parser");
const request=require("request");
const cors = require('cors');
const path=require('path');
const e = require("cors");
const https = require("https");
const { Http2ServerRequest } = require("http2");


var app=express();
app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static("public"));


app.get('/',function(req,res){
    res.sendFile(__dirname + '/signup.html');
});

app.post('/failure',function(req,res){
    res.redirect("/");
});


app.post('/',function(req,res){
    var fName=req.body.fName;
    var lName=req.body.lName;
    var email=req.body.email;
    console.log(fName+lName+email);

    var data={
        members:[
            {
                email_address:email,
                status:"subscribed",
                merge_fields:{
                    FNAME:fName,
                    LNAME:lName,
                }

            }
        ]
    };

    var jsonData=JSON.stringify(data);

    const url="https://us10.api.mailchimp.com/3.0/lists/f8fd73fed7";

    const options={
        method:"POST",
        auth:"bhavik:95fc737f42600d0c10e31533a5f25b1c-us10",
    };

    const request=https.request(url,options,function(response){
        
        
        if(response.statusCode===200){
            res.sendFile(__dirname+"/success.html");
        }
        else{
            res.sendFile(__dirname+"/failure.html");
        }
        response.on("data",function(data){
            var response1=JSON.parse(data);
            console.log(response1);
        });
    });

    request.write(jsonData);
    request.end();

});

app.listen(process.env.PORT || 3000,function(){
    console.log("Server is runing on port 3000.")
});



//API KEY
//95fc737f42600d0c10e31533a5f25b1c-us10
//list id
//f8fd73fed7

