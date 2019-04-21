const express = require('express');

const router = express.Router();

const Road = require('../models/Road');

router.get('/', async (req, res) => {
    try{
        const roads = await Road.find();

        return res.send({roads})

    } catch (err) {
        return res.status(400).send({ error: 'Error loading the roads'})
    }
})

router.get('/:roadId', async (req, res) => {
    try{
        const roads = await Road.findById(req.params.roadId);

        return res.send({roads})

    } catch (err) {
        return res.status(400).send({ error: 'Error loading the refered road'})
    }
})


router.post('/', async (req, res) => {
    try{
        const road = await Road.create(req.body);
        
        return res.send({road})
        
    } catch (err) {
        return res.status(400).send({ error: 'Error creating new road'})
    }
})

router.put('/:roadId', async (req, res) => {
    try {
        const road = await Road.findByIdAndUpdate(req.params.roadId, {$set: req.body}, {new: true})

        return res.send(road)
 
    } catch (err) {
        console.log(err)
        return res.status(400).send({ error: 'Error updating the refered road'})
    }
})

router.delete('/:roadId', async (req, res) => {
    try{
        await Road.findByIdAndRemove(req.params.roadId);

        return res.send()

    } catch (err) {
        return res.status(400).send({ error: 'Error deleting the road'})
    }
})

module.exports = app => app.use('/road', router);