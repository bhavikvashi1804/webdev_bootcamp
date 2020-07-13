const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');

// Connection URL
const url = 'mongodb://localhost:27017';
// Database Name
const dbName = 'fruitsDB';

// create a client, passing in additional options
const client = new MongoClient(url,{useUnifiedTopology:true});

// Use connect method to connect to the server
client.connect(function(err) {
    assert.equal(null, err);
    console.log("Connected correctly to server");

    const db=client.db('fruitsDB');

    /*
    insertDocuments(
        db,
        function(){
            client.close();
        }
    );
    */

    findDocuments(db,function(){client.close();});
    
});



const insertDocuments = function(db, callback) {
    
    
    // Get the documents collection
    const collection = db.collection('fruits');
    
    // Insert some document
    collection.insertMany([
        {
            name:'Apple',
            score:8,
            review:'Sweet'
        },
        {
            name:'Orange',
            score:6,
            review:'Juicy'
        },
        {
            name:'Banana',
            score:9,
            review:'Great vitamins'
        }
    ], function(err, result) {
      assert.equal(err, null);
      //no error
      assert.equal(3, result.result.n);
      //must 3 result
      assert.equal(3, result.ops.length);
      console.log("Inserted 3 documents into the collection");
      console.log(result);
      callback(result);
    });
}


const findDocuments=function(db,callback){
    const collection=db.collection("fruits");

    collection.find({}).toArray(
        function(err,fruits){
            assert.equal(err,null);
            console.log("No documents found");
            console.log(fruits);
            callback(fruits);
        }
    );
}