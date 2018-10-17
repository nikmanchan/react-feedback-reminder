const express = require('express');
const router = express.Router();

const mongoose = require('mongoose');

const Schema = mongoose.Schema;

// Mongoose Schema
const FeedbackSchema = new Schema({
    feeling: { type: String, required: true },
    understanding: { type: String, required: true },
    support: { type: Number, required: true },
    comments: { type: String, required: true }
});

const Feedback = mongoose.model('Feedback', FeedbackSchema);

router.get('/', (req, res) => {
    console.log('GET /feedback');
    Feedback.find({}).then((result) => {
        res.send(result);
    }).catch((error) => {
        console.log('Error GET /feedback', error)
        res.sendStatus(500);
    });
})

// POST a new order
router.post('/', (req, res) => {
    console.log('POST /feedback', req.body);
    const newFeedback = req.body;
    // newFeedback should match the OrderSchema format
    const order = new Orders(newFeedback);
    order.save().then((result) => {
        res.sendStatus(201);
    }).catch((error) => {
        console.log('Error POST /feedback', error);
        res.sendStatus(500);
    });
});
module.exports = router;