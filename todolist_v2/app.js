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

const listSchema=mongoose.Schema({
  name: {
    type:String,
    required:true,
  },
  item:[noteSchema]
});
const List=mongoose.model("List",listSchema);

app.get("/", function(req, res) {
  Note.find({},function(err,notes){
    //console.log(notes);
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


app.get("/:customNoteListName",function(req,res){
  const kListName=req.params.customNoteListName;

  console.log("page name:"+kListName);

  List.findOne({name:kListName},function(error,foundList){
    if(error){
      console.log(error);
    }
    else{
      if(!foundList){
        //create new entry in db
       
        console.log("Does not exist");
        const newList=List({
          name:kListName,
          item:defaultNotes,
        });
        console.log(newList);
        newList.save();
        res.redirect("/"+kListName);
      }else{
        console.log("Exist");
        res.render("list",{listTitle:foundList.name,newListItems:foundList.item})
      }
    }
  });

 
  

});

app.post("/", function(req, res){
  const item = req.body.newItem;
  const listName=req.body.list;
  const newNote=new Note({
    name:item
  });

  if(listName==="Today"){
    newNote.save();
    res.redirect("/");
  }
  else{
    List.findOne({name:listName},function(e,foundlist){
      foundlist.item.push(newNote);
      foundlist.save();
      res.redirect("/"+listName);
    });
  }
  
  
});

app.post("/delete", function(req, res){
  

  const checkedItemID=req.body.checkbox;
  const listName=req.body.listName;
  console.log(checkedItemID);


  if(listName==="Today"){
    Note.findByIdAndRemove(checkedItemID,function(error){
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
    List.findOneAndUpdate(
      {name:listName},
      {$pull:{item:{_id:checkedItemID}}},
      function(e){
        if(!e){
          res.redirect("/"+listName);
          
        }
      }
    );

  }

 
 
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
