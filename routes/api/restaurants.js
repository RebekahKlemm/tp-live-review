var Restaurants = require('../../models/restaurant');
const express = require('express');
const router = express.Router();

router.get('/', function(req, res, next) {
    Restaurants.findAll({})
        .then(function(restaurantInstances) {
            res.json(restaurantInstances);
        })
        .catch(next);
});




module.exports = router;