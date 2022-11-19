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
    body('name', 'Name cannot be blank').isLength({ min: 1 }),
    body('phone_number', 'Please enter 10 digit number').isLength({ min: 10 }),
    body('address', 'Address cannot be blank').isLength({ min: 1 }),
    body('item_name', 'Item_name cannot be blank').isLength({ min: 1 }),
], async (req, res) => {
    try {
        let success=false;
        const { name, phone_number, address, item_name, associate_1, phone_number_1, address_1, due_1, associate_2, phone_number_2, address_2, due_2, associate_3, phone_number_3, address_3, due_3 } = req.body;
        // if there are errors, return Bad request and the errors
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }
        const detail = new Detail({
            name, phone_number, address, item_name, associate_1, phone_number_1, address_1, due_1, associate_2, phone_number_2, address_2, due_2, associate_3, phone_number_3, address_3, due_3, user: req.user.id
        })
        const savedDetail = await detail.save();
        success = true;
        res.json({success, savedDetail});

    } catch (error) {
        console.error(error.message);
        res.status(500).send("Internal Server Error");
    }
})

module.exports = router;