const mongoose=require("mongoose");

mongoose.connect("mongodb://localhost:27017/fruitsDB",{useNewUrlParser:true,useUnifiedTopology:true});

const fruitsSchema=new mongoose.Schema({
    name:String,
    rating:Number,
    review:String
});

const Fruit=mongoose.model("Fruit",fruitsSchema);

const kiwi=new Fruit({
    name:'Kiwi',
    rating:9,
    review:'Best for the health'
});

const banana=new Fruit({
    name:'Banana',
    rating:7,
    review:'White color'
});


const orange=new Fruit({
    name:'Orange',
    rating:8,
    review:'Juicy'
});

Fruit.insertMany([kiwi,banana,orange],function(error){
    if(error){
        console.log(error);
    }
    else{
        console.log("Database updated succesfully");
    }
});

