//jshint esversion:6
const mongoose =require("mongoose");
const express = require("express");
const bodyParser = require("body-parser");
const date = require(__dirname + "/date.js");

const app = express();

app.set('view engine', 'ejs');


app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));

//connections
mongoose.connect("mongodb://localhost:27017/todoDB",{useNewUrlParser:true,useUnifiedTopology:true});

//schema
const noteSchema=new mongoose.Schema({
  name: {
      type:String,
      required:true
  }
});
const Note=mongoose.model("Note",noteSchema);


//dummy notes
const note1=new Note({
  name:'Buy Book'
});
const note2=new Note({
  name:'Read Book'
});
const note3=new Note({
  name:'Give the exam'
});
const defaultNotes=[note1,note2,note3];
/*
Note.insertMany(defaultNotes,function(error){
  if(error){
    console.log(error);
  }
  else{
    console.log("Done");
  }
});
*/


const items = ["Buy Food", "Cook Food", "Eat Food"];
const workItems = [];

app.get("/", function(req, res) {
  Note.find({},function(err,notes){
    console.log(notes);
    //this is for default items
    if(notes.length===0){
      Note.insertMany(defaultNotes,function(error){
        if(error){
          console.log(error);
        }
        else{
          console.log("Done");
          res.redirect("/");
        }
      });
    }
    else{
      res.render("list", {listTitle: "Today", newListItems: notes});
    }
  });  
  
});

app.post("/", function(req, res){
  const item = req.body.newItem;
  const newNote=new Note({
    name:item
  });
  newNote.save();
  res.redirect("/");
});

app.get("/work", function(req,res){
  res.render("list", {listTitle: "Work List", newListItems: workItems});
});

app.get("/about", function(req, res){
  res.render("about");
});

app.listen(3000, function() {
  console.log("Server started on port 3000");
});
