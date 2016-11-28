var Hotels = require('../../models/hotel');
const express = require('express');
const router = express.Router();

router.get('/', function(req, res, next) {
    Hotels.findAll({})
        .then(function(hotelsInstances) {
            res.json(hotelsInstances);
        })
        .catch(next);
});




module.exports = router;