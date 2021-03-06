const mongoose = require("mongoose");
const express = require("express");
const Schema = mongoose.Schema;
const app = express();
const jsonParser = express.json();
 
const userScheme = new Schema({
  _id: String,
  index: Number,
  guid: String,
  age: Number,
  eyeColor: String,
  name: {
    first: String,
    last: String
  },
  company: String,
  email: String,
  phone: String,
  address: String,
  registered: String
});

const User = mongoose.model("User", userScheme);
 
app.use(express.static(__dirname + "/public"));
 // Enable CORS
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  next();
});

mongoose.connect("mongodb://localhost:27017/app", { useNewUrlParser: true }, function(err){
    if(err) return console.log(err);
    app.listen(3000, function(){
        console.log("Server start work...");
    });
});
  
app.get("/users", function(req, res){
    User.find({}, function(err, users){
        if(err) return console.log(err);
        res.send(users)
    });
});

app.get("/users/:start", function(req, res){
  const start = req.params.start;
    User.find({}, function(err, users){
        if(err) return console.log(err);
        res.send(users)
    }).sort({ $natural: 1 }).skip(start - 100).limit(100);
});
 
app.get("/users/:id", function(req, res){
    const id = req.params.id;
    User.findOne({_id: id}, function(err, user){
        if(err) return console.log(err);
        res.send(user);
    });
});


// app.post("/api/users", jsonParser, function (req, res) {
        
//     if(!req.body) return res.sendStatus(400);
        
//     const userName = req.body.name;
//     const userAge = req.body.age;
//     const user = new User({name: userName, age: userAge});
        
//     user.save(function(err){
//         if(err) return console.log(err);
//         res.send(user);
//     });
// });
     
// app.delete("/api/users/:id", function(req, res){
         
//     const id = req.params.id;
//     User.findByIdAndDelete(id, function(err, user){
                
//         if(err) return console.log(err);
//         res.send(user);
//     });
// });
    
// app.put("/api/users", jsonParser, function(req, res){
         
//     if(!req.body) return res.sendStatus(400);
//     const id = req.body.id;
//     const userName = req.body.name;
//     const userAge = req.body.age;
//     const newUser = {age: userAge, name: userName};
     
//     User.findOneAndUpdate({_id: id}, newUser, {new: true}, function(err, user){
//         if(err) return console.log(err); 
//         res.send(user);
//     });
// });