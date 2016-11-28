var Hotels = require('../../models/hotel');
var Place = require('../../models/place');

const express = require('express');
const router = express.Router();

router.get('/', function(req, res, next) {
    Hotels.findAll({include: [Place]})
        .then(function(hotelsInstances) {
            res.json(hotelsInstances);
        })
        .catch(next);
});




module.exports = router;