const mongoose=require("mongoose");

mongoose.connect("mongodb://localhost:27017/fruitsDB",{useNewUrlParser:true,useUnifiedTopology:true});

const fruitsSchema=new mongoose.Schema({
    name: {
        type:String,
        required:true
    },
    rating:{
        type: Number,
        min:1,
        max:10
    },
    review:String
});
const Fruit=mongoose.model("Fruit",fruitsSchema);


const personSchema=new mongoose.Schema({
    name:String,
    age:Number,
    favFruit:fruitsSchema
});
const Person=mongoose.model("Person",personSchema);

const pineApple=new Fruit({
    name:'Pine Apple',
    rating: 7,
    review:"Sour"
});
pineApple.save();

const person1=new Person({
    name:'Bhavik Vashi',
    age:21,
    favFruit:pineApple
});
person1.save();