var Day = require('../../models/day');
const express = require('express');
const router = express.Router();

router.get('/', function(req, res, next) {
    Day.findAll({})
        .then(function(dayInstances) {
            console.log(dayInstances);
            res.send(dayInstances);
        })
        .catch(next);
});

router.get('/:id', function(req, res, next) {
    Day.findOne({where: {id: req.params.id}})
        .then(function(day) {
            res.json(day);
        })
        .catch(next);
});

router.post('/:id/restaurants', function(req, res, next) {
    Day.findOne({where: {id: req.params.id}})
        .then(function(day) {
            console.log(day);
            return day.addRestaurant(req.body.id);
        })
        .then(function() {
            res.status(201).send();
        })
        .catch(next);
});

router.delete('/:id/restaurants', function(req, res, next) {
    Day.findOne({where: {id: req.params.id}})
        .then(function(day) {
            return day.removeRestaurant(req.body.id);
        })
        .then(function() {
            res.status(202).send();
        })
        .catch(next);
});

router.post('/:id/activities', function(req, res, next) {
    Day.findOne({where: {id: req.params.id}})
        .then(function(day) {
            return day.addActivity(req.body.id);
        })
        .then(function() {
            res.status(201).send();
        })
        .catch(next);
});

router.delete('/:id/activities', function(req, res, next) {
    Day.findOne({where: {id: req.params.id}})
        .then(function(day) {
            return day.removeActivity(req.body.id);
        })
        .then(function() {
            res.status(202).send();
        })
        .catch(next);
});

router.post('/:id/hotels', function(req, res, next) {
    Day.findOne({where: {id: req.params.id}})
        .then(function(day) {
            console.log(req.body)
            return day.update({
                hotelId: req.body.id
            });
        })
        .then(function() {
            res.status(201).send();
        })
        .catch(next);
});

router.delete('/:id/hotels', function(req, res, next) {
    Day.findOne({where: {id: req.params.id}})
        .then(function(day) {
            return day.update({
                hotelId: null
            });
        })
        .then(function() {
            res.status(202).send();
        })
        .catch(next);
});

router.post('/', function(req, res, next) {
    Day.create({})
        .then(function(day) {
            res.json(day);
        })
        .catch(next);
});

router.delete('/:id', function(req, res, next) {
    Day.destroy({where: {id: req.params.id}})
        .then(function() {
            res.status(202).send();
        })
        .catch(next);
});




module.exports = router;