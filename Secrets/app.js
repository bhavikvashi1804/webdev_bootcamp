//jshint esversion:6
require('dotenv').config();
const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");
const mongoose=require("mongoose");
const bcrypt=require("bcrypt");
const saltRounds=10;

const app = express();

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(express.static("public"));


mongoose.connect("mongodb://localhost:27017/userDB",{useNewUrlParser:true,useUnifiedTopology:true});

const userSchema=mongoose.Schema(
    {
        email:String,
        password:String,
    }
);

//use before create model
const User=mongoose.model("User",userSchema);

app.get("/",function(req,res){
    res.render("home");
});
app.get("/login",function(req,res){
    res.render("login");
});
app.get("/register",function(req,res){
    res.render("register");
});


app.post("/register",function(req,res){


    

    bcrypt.hash(req.body.password, saltRounds, function(err, hash) {
        // Store hash in your password DB.

        if(!err){
            const newUser =new User(
                {
                    email:req.body.username,
                    password:hash
                }
            );
        
            newUser.save(function(error){
                if(error){
                    res.send("Error");
                }
                else{
                    res.render("Secrets");
                }
            });
        }
    });
    

});


app.post("/login",function(req,res){

    const kEmail=req.body.username;
    const kPassword=req.body.password;


    User.findOne(
        {email:kEmail},
        function(error,foundUser){
            if(error){
                res.send("Error");
            }
            else{

                bcrypt.compare(kPassword, foundUser.password, function(err, result) {
                    // result == true
                    if(result){
                        res.render("Secrets");
                    }
                    else{
                        res.send("Please check your email and password");
                    }
                });
            }
        }
    );

});


app.listen(3000, function() {
    console.log("Server started on port 3000");
});