const mongoose = require('mongoose');
// const mongoURI = "mongodb://localhost:27017/appDesign";
const mongoURI = "mongodb+srv://Antriks:Antriks@cluster0.nrdedhm.mongodb.net/?retryWrites=true&w=majority";

const connectToMongo = () =>{
    mongoose.connect(mongoURI, ()=>{
        console.log("Connected to Mongo Successfully");
    });
}

module.exports = connectToMongo;