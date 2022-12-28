const mongoose = require('mongoose');
// const mongoURI = "mongodb://localhost:27017/appDesign";
const mongoURI = "mongodb+srv://shivansh:W1gJmf1l9MN5TnPr@cluster0.5ufigd1.mongodb.net/?retryWrites=true&w=majority";

const connectToMongo = () =>{
    mongoose.connect(mongoURI, ()=>{
        console.log("Connected to Mongo Successfully");
    });
}

module.exports = connectToMongo;