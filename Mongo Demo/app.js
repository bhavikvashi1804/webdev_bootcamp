const mongoose=require("mongoose");

mongoose.connect("mongodb://localhost:27017/fruitsDB",{useNewUrlParser:true,useUnifiedTopology:true});

const fruitsSchema=new mongoose.Schema({
    name:String,
    rating:Number,
    review:String
});

const Fruit=mongoose.model("Fruit",fruitsSchema);

const fruit=new Fruit({
    name:'Apple',
    rating:7,
    review:'Good'
});
fruit.save();

const personSchema=new mongoose.Schema({
    name:String,
    age:Number
});

const Person=mongoose.model("Person",personSchema);

const person=new Person({
    name:'Bhavik',
    age:21
});
person.save();
