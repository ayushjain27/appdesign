const express = require('express');
const router = express.Router();
const fetchuser = require('../middleware/fetchuser');
const Detail = require('../models/Details');
const { body, validationResult } = require('express-validator');

// ROUTE 1:  Get All the Details using: GET "/api/details/fetchalldetails". login required
router.get('/fetchalldetails', fetchuser, async (req, res) => {
    try {
        const details = await Detail.find({ user: req.user.id });
        res.json(details);
    } catch (error) {
        console.error(error.message);
        res.status(500).send("Internal Server Error");
    }
})

// ROUTE 2:  Add a new Detail using: POST "/api/details/adddetail". login required
router.post('/adddetail', fetchuser, [
    body('customer_id', 'Customer_id cannot be blank').isLength({ min: 2 }),
    body('name', 'Name cannot be blank').isLength({ min: 1 }),
    body('phone_number', 'Please enter 10 digit number').isLength({ min: 10 }),
    body('address', 'Address cannot be blank').isLength({ min: 1 }),
    body('item_name', 'Item_name cannot be blank').isLength({ min: 1 }),
    body('item_price', 'Item_name cannot be blank').isLength({ min: 1 }),
    body('down_payment', 'Item_name cannot be blank').isLength({ min: 1 }),
    body('emi_amount', 'Item_name cannot be blank').isLength({ min: 1 }),
], async (req, res) => {
    try {
        let success=false;
        const { customer_id, reference_id, name, phone_number, address, item_name, item_price, down_payment, emi_amount, due_1, amount_1, due_2, amount_2, due_3, amount_3, due_4, amount_4, due_5, amount_5, associate_1, phone_number_1, address_1, associate_2, phone_number_2, address_2, associate_3, phone_number_3, address_3 } = req.body;
        // if there are errors, return Bad request and the errors
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }
        const detail = new Detail({
            customer_id, reference_id, name, phone_number, address, item_name, item_price, down_payment, emi_amount, due_1, amount_1, due_2, amount_2, due_3, amount_3, due_4, amount_4, due_5, amount_5, associate_1, phone_number_1, address_1, associate_2, phone_number_2, address_2, associate_3, phone_number_3, address_3, user: req.user.id
        })
        const savedDetail = await detail.save();
        success = true;
        res.json({success, savedDetail});

    } catch (error) {
        console.error(error.message);
        res.status(500).send("Internal Server Error");
    }
});

// ROUTE 3: Update an existing Details using: PUT "/api/details/updatedetail". Login required
router.put('/updatedetail/:id', fetchuser, async (req, res) => {
    try {
        const { customer_id, reference_id, name, phone_number, address, item_name, item_price, down_payment, emi_amount, due_1, amount_1, due_2, amount_2, due_3, amount_3, due_4, amount_4, due_5, amount_5, associate_1, phone_number_1, address_1, associate_2, phone_number_2, address_2, associate_3, phone_number_3, address_3 } = req.body;
        // Create a newnNote object
        const newDetail = {};
        if (customer_id) { newDetail.customer_id = customer_id };
        if (reference_id) { newDetail.reference_id = reference_id };
        if (name) { newDetail.name = name };
        if (phone_number) { newDetail.phone_number = phone_number };
        if (address) { newDetail.address = address };
        if ( item_name) { newDetail.item_name =  item_name };
        if ( item_price) { newDetail.item_price =  item_price };
        if ( down_payment) { newDetail.down_payment =  down_payment };
        if ( emi_amount) { newDetail.emi_amount =  emi_amount };
        if ( due_1) { newDetail.due_1 =  due_1 };
        if ( amount_1) { newDetail.amount_1 =  amount_1 };
        if ( due_2) { newDetail.due_2 =  due_2 };
        if ( amount_2) { newDetail.amount_2 =  amount_2 };
        if ( due_3) { newDetail.due_3 =  due_3 };
        if ( amount_3) { newDetail.amount_3 =  amount_3 };
        if ( due_4) { newDetail.due_4 =  due_4 };
        if ( amount_4) { newDetail.amount_4 =  amount_4 };
        if ( due_5) { newDetail.due_5 =  due_5 };
        if ( amount_5) { newDetail.amount_5 =  amount_5 };
        if ( associate_1) { newDetail.associate_1 =  associate_1 };
        if ( associate_2) { newDetail.associate_2 =  associate_2 };
        if ( associate_3) { newDetail.associate_3 =  associate_3 };
        if ( phone_number_1) { newDetail.phone_number_1 =  phone_number_1 };
        if ( phone_number_2) { newDetail.phone_number_2 =  phone_number_2 };
        if ( phone_number_3) { newDetail.phone_number_3 =  phone_number_3 };
        if ( address_1) { newDetail.address_1 =  address_1 };
        if ( address_2) { newDetail.address_2 =  address_2 };
        if ( address_3) { newDetail.address_3 =  address_3 };

        // Find the detail to be updated and update it
        let detail = await Detail.findById(req.params.id);
        if (!detail) { return res.status(404).send("Not found") }

        if (detail.user.toString() !== req.user.id) {
            return res.status(401).send("Not Allowed");
        }

        detail = await Detail.findByIdAndUpdate(req.params.id, { $set: newDetail }, { new: true })
        res.json({ detail });
        // res.json(detail); // This is also true
    } catch (error) {
        console.log(error.mesage);
        res.status(500).send("Internal Server Error");
    }
});

// ROUTE 4: Delete an existing Detail using: DELETE "/api/details/deletedetail". Login required
router.delete('/deletedetail/:id', fetchuser, async (req, res) => {
    try {
        // Find the detail to be deleted and delete it
        let detail = await Detail.findById(req.params.id);
        if (!detail) { return res.status(404).send("Not found") }
    
        // Allow deletion only if user owns this Detail
        if (detail.user.toString() !== req.user.id) {
            return res.status(401).send("Not Allowed");
        }
    
        detail = await Detail.findByIdAndDelete(req.params.id)
        res.json({ "Success": "Details has been deleted", detail: detail });
    } catch (error) {
        console.log(error.mesage);
        res.status(500).send("Internal Server Error");
    }
});

module.exports = router;