var Day = require('../../models/day');
const express = require('express');
const router = express.Router();

router.get('/', function(req, res, next) {
    Day.findAll({})
        .then(function(dayInstances) {
            res.json(dayInstances);
        })
        .catch(next);
});




module.exports = router;