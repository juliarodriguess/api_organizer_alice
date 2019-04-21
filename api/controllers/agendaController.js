const express = require('express');

const router = express.Router();

const Agenda = require('../models/Agenda');

router.get('/', async (req, res) => {
    try{
        const agendas = await Agenda.find();

        return res.send({agendas})

    } catch (err) {
        return res.status(400).send({ error: 'Error loading the agendas'})
    }
})

router.get('/:agendaId', async (req, res) => {
    try{
        const agendas = await Agenda.findById(req.params.agendaId);

        return res.send({agendas})

    } catch (err) {
        return res.status(400).send({ error: 'Error loading the refered agenda'})
    }
})


router.post('/', async (req, res) => {
    try{
        const agenda = await Agenda.create(req.body);
        
        return res.send({agenda})
        
    } catch (err) {
        return res.status(400).send({ error: 'Error creating new agenda'})
    }
})

router.put('/:agendaId', async (req, res) => {
    try {
        const agenda = await Agenda.findByIdAndUpdate(req.params.agendaId, {$set: req.body}, {new: true})

        return res.send(agenda)
 
    } catch (err) {
        console.log(err)
        return res.status(400).send({ error: 'Error updating the refered agenda'})
    }
})

router.put('/:agendaId/attendance', async (req, res) => {
    try {
        const agenda = await Agenda.findByIdAndUpdate(req.params.agendaId, {$push: req.body}, {new: true})

        return res.send(agenda)
 
    } catch (err) {
        console.log(err)
        return res.status(400).send({ error: 'Error updating the attendance'})
    }
})

router.delete('/:agendaId', async (req, res) => {
    try{
        await Agenda.findByIdAndRemove(req.params.agendaId);

        return res.send()

    } catch (err) {
        return res.status(400).send({ error: 'Error deleting the agenda'})
    }
})

module.exports = app => app.use('/agenda', router);