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


//   this for all the posts
app.route('/posts').get(
  function(req,res){
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
  }
).post(
  function(req,res){
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
  }
).delete(
  function(req,res){
    Post.deleteMany(
      {},
      function(error){
        if(error){
          console.log("Error");
          res.send("Error");
        }
        else{
          console.log("Deleted All Posts");
          res.send("Deleted All Posts");
        }
      }
    );
  }
);


//this is for the specific post
app.route("/posts/:title").get(
  function(req,res){
    const kTitle=req.params.title;
    Post.findOne(
      {
        title:kTitle
      },
      function(error,onePost){
        if(error){
          res.send("Error");
        }
        else{
          if(!onePost){
            res.send("No Post found");
          }
          else{
            res.send(onePost);
          }
        }
      }
    );
  }
).put(
  function(req,res){
    const kTitle=req.params.title;
    Post.update(
      {
        title:kTitle
      },
      {
        title:req.body.title,
        content:req.body.content,
        //if you donot provide title then it removes old one 
        //new post will contain only content
      },
      {
        overwrite:true,
      },
      function(error){
        if(error){
          res.send("Error");
        }
        else{
          res.send("Update Done");
        }
      }
    );
  }
).patch(
  function(req,res){
    Post.update(
      {
        title:req.params.title
      },
      {
        $set:req.body
      },
      function(error){
        if(error){
          res.send("Error");
        }
        else{
          res.send("Done");
        }
      }
    );
  }
).delete(
  function(req,res){
    Post.deleteOne(
      {
        title:req.params.title,
      },
      function(error){
        if(error){
          res.send(error);
        }
        else{
          res.send("Post Deleted Sucessfully");
        }
      }
    );
  }
);


app.listen(3000, function() {
  console.log("Server started on port 3000");
});