var Activity = require('../../models/activity');
var Place = require('../../models/place');

const express = require('express');
const router = express.Router();

router.get('/', function(req, res, next) {
    Activity.findAll({include: [Place]})
        .then(function(activityInstances) {
            res.json(activityInstances);
        })
        .catch(next);
});




module.exports = router;
