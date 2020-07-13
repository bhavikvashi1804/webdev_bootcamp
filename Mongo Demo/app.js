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


const fruit1=new Fruit({  
    rating:7,
    review:'Good'
});

fruit1.save();

mongoose.connection.close();

Fruit.save