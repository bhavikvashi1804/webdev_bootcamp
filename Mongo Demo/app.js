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

const mango=new Fruit({
    name:'mango',
    rating: 9,
    review:"Variety"
});
mango.save();

Person.updateOne({name:'Bhavik'},{favFruit:mango},function(error){
    if(error){
        console.log(error)
    }
    else{
        console.log("Done");
    }
});