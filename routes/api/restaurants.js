var Restaurants = require('../../models/restaurant');
var Place = require('../../models/place');

const express = require('express');
const router = express.Router();

router.get('/', function(req, res, next) {
    Restaurants.findAll({include: [Place]})
        .then(function(restaurantInstances) {
            res.json(restaurantInstances);
        })
        .catch(next);
});




module.exports = router;