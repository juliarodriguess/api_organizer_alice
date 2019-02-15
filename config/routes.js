const express = require('express')

module.exports = function(server) {

    const router = express.Router()
    server.use('/api', router)

    const roadsService = require('../api/roads/roadsService')
    roadsService.register(router, '/roads')

    const activitiesService = require('../api/activities/activitiesService')
    activitiesService.register(router, '/activities')

    const usersService = require('../api/users/usersServices')
    usersService.register(router, '/user')

    const agendaService = require('../api/agenda/agendaService')
    agendaService.register(router, '/agenda')
}