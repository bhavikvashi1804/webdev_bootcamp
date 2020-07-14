const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");
const mongoose = require('mongoose');

const app = express();

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(express.static("public"));


mongoose.connect("mongodb://localhost:27017/wikiDB",{useNewUrlParser:true,useUnifiedTopology:true});

const postSchema=mongoose.Schema({
    title:String,
    content:String,
});

const Post=mongoose.model("Post",postSchema);


app.get("/posts",function(req,res){
  Post.find({},function(error,foundPosts){
    if(error){
      //console.log(error);
      res.send("Error");
    }
    else{
      //console.log(foundPosts);
      res.send(foundPosts);
    }
  });
});

app.post("/posts",function(req,res){
  const title=req.body.title;
  const content=req.body.content;

  const newPost=new Post({
    title:title,
    content:content
  });
  
  newPost.save(function(error){
    if(error){
      res.send("Error");
    }
    else{
      res.send("New Post Added");
    }
  });

});

app.listen(3000, function() {
  console.log("Server started on port 3000");
});