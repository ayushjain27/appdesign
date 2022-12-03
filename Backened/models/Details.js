const mongoose = require('mongoose');
const { Schema } = mongoose;

const DetailsSchema = new Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user'
    },
    customer_id: {
        type: Number,
        required: true
    },
    reference_id: {
        type: Number,
    },
    name: {
        type: String,
        required: true
    },
    phone_number: {
        type: Number,
        required: true
    },
    address: {
        type: String,
        required: true
    },
    item_name: {
        type: String,
        required: true
    },
    item_price: {
        type: Number,
        required: true
    },
    down_payment: {
        type: Number,
        required: true
    },
    emi_amount: {
        type: Number,
        required: true
    },
    due_1: {
        type: String,
    },
    amount_1: {
        type: Number,
    },
    due_2: {
        type: String,
    },
    amount_2: {
        type: Number,
    },
    due_3: {
        type: String,
    },
    amount_3: {
        type: Number,
    },
    due_4: {
        type: String,
    },
    amount_4: {
        type: Number,
    },
    due_5: {
        type: String,
    },
    amount_5: {
        type: Number,
    },
    purchase_date: {
        type: Date,
        default: Date.now
    },
    associate_1: {
        type: String,
    },
    phone_number_1: {
        type: Number,
    },
    address_1: {
        type: String,
    },
    associate_2: {
        type: String,
    },
    phone_number_2: {
        type: Number,
    },
    address_2: {
        type: String,
    },
    associate_3: {
        type: String,
    },
    phone_number_3: {
        type: Number,
    },
    address_3: {
        type: String,
    },
})

module.exports = mongoose.model('details', DetailsSchema);