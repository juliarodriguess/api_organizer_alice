const express = require('express');

const User = require('../models/user.js');

const router = express.Router();

router.post('/register', async (req, res) => {
    try { 
        const user = await User.create(req.body);

        return res.send({ user });

    } catch (err) {
        return res.status(400).send({ error: 'Registration failed' });
    }
});

router.get('/', async (req, res) => {
    try{
        const users = await User.find();

        return res.send({users})

    } catch (err) {
        return res.status(400).send({ error: 'Error loading the users'})
    }
})

router.get('/:userId', async (req, res) => {
    try{
        const user = await User.findById(req.params.userId);

        return res.send({user})

    } catch (err) {
        return res.status(400).send({ error: 'Error loading the refered user'})
    }
})

router.put('/:userId', async (req, res) => {
    try {
        const user = await User.findByIdAndUpdate(req.params.userId, {$set: req.body}, {new: true})

        return res.send(user)
 
    } catch (err) {
        console.log(err)
        return res.status(400).send({ error: 'Error updating the refered user'})
    }
})

router.delete('/:userId', async (req, res) => {
    try{
        await User.findByIdAndRemove(req.params.userId);

        return res.send()

    } catch (err) {
        return res.status(400).send({ error: 'Error deleting the user'})
    }
})

module.exports = app => app.use('/auth', router);