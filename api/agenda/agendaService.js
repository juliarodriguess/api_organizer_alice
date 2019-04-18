const Agenda = require('./agenda')
const express = require("express");
const router = express.Router();

Agenda.methods(['get', 'post', 'put','options', 'patch', 'delete'])


Agenda.updateOptions({new:true, runValidators: true})

module.exports = Agenda