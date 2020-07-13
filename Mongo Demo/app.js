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



Fruit.deleteMany({name:'Apple'},function(error){
    if(error){
        console.log(error);
    }
    else{
        console.log("Done");
    }
});

