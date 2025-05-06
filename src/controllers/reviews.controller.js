const Review = require('../models/reviews.model');

const getAll = async (req, res) => {
    const result = await Review.selectAll();
    res.json(result);
};

const create = async (req, res) => {
    req.body.user_id = req.user.id;
    // req.body = {user_id, message, rating}
    const result = await Review.insert(req.body);
    const newReview = await Review.selectById(result.insertId);
    res.json(newReview);
};

module.exports = { getAll, create };
