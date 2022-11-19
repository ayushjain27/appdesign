const mongoose = require('mongoose');
const { Schema } = mongoose;

const DetailsSchema = new Schema({
    user:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user'
    },
    name:{
        type: String,
        required: true
    },
    phone_number:{
        type: Number,
        required : true 
    },
    address:{
        type: String,
        required : true 
    },
    item_name:{
        type: String,
        required : true 
    },
    purchase_date:{
        type: Date,
        default: Date.now
    },
    associate_1:{
        type: String, 
    },
    phone_number_1:{
        type: Number, 
    },
    address_1:{
        type: String, 
    },
    due_1:{
        type: String, 
    },
    associate_2:{
        type: String, 
    },
    phone_number_2:{
        type: Number, 
    },
    address_2:{
        type: String, 
    },
    due_2:{
        type: String,
    },
    associate_3:{
        type: String, 
    },
    phone_number_3:{
        type: Number, 
    },
    address_3:{
        type: String, 
    },
    due_3:{
        type: String,
    },
})

module.exports = mongoose.model('details', DetailsSchema);