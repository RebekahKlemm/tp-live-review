var Activity = require('../../models/activity');
const express = require('express');
const router = express.Router();

router.get('/', function(req, res, next) {
    Activity.findAll({})
        .then(function(activityInstances) {
            res.json(activityInstances);
        })
        .catch(next);
});




module.exports = router;
