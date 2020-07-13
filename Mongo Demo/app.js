const mongoose=require("mongoose");

mongoose.connect("mongodb://localhost:27017/fruitsDB",{useNewUrlParser:true,useUnifiedTopology:true});

const fruitsSchema=new mongoose.Schema({
    name:String,
    rating:Number,
    review:String
});

const Fruit=mongoose.model("Fruit",fruitsSchema);

Fruit.find(
    function(error,fruits){
        if(error){
            console.log(error);
        }
        else{
            for(var i=0;i<fruits.length;i++){
                console.log(fruits[i].name);
            }
        }
    }
);