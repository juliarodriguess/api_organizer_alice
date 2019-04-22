const express = require('express');

const router = express.Router();

const Activity = require('../models/activities.js');

router.get('/', async (req, res) => {
    try{
        const activities = await Activity.find();

        return res.send(activities)

    } catch (err) {
        return res.status(400).send({ error: 'Error loading the activities'})
    }
})

router.get('/:activityId', async (req, res) => {
    try{
        const activity = await Activity.findById(req.params.activityId);

        return res.send(activity)

    } catch (err) {
        return res.status(400).send({ error: 'Error loading the refered activity'})
    }
})


router.post('/', async (req, res) => {
    try{
        const activity = await Activity.create(req.body);
        
        return res.send(activity)
        
    } catch (err) {
        return res.status(400).send({ error: 'Error creating new activity'})
    }
})

router.put('/:activityId', async (req, res) => {
    try {
        const activity = await Activity.findByIdAndUpdate(req.params.activityId, {$set: req.body}, {new: true})

        return res.send(activity)
 
    } catch (err) {
        console.log(err)
        return res.status(400).send({ error: 'Error updating the refered activity'})
    }
})

router.delete('/:activityId', async (req, res) => {
    try{
        await Activity.findByIdAndRemove(req.params.activityId);

        return res.send()

    } catch (err) {
        return res.status(400).send({ error: 'Error deleting the activity'})
    }
})

module.exports = app => app.use('/activities', router);