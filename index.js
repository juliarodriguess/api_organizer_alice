const server = require('./config/server')
require('./config/database')
require('./config/routes')(server)

// const Activity = require('./api/activities/activities')
// const Road = require('./api/roads/roads')

// let futebol = new Activity({
//     title: 'Futebol'
// })

// futebol.save()


// let corpo = new Road({
//     title: 'Corpo',
//     activities:[{
//         informations: futebol._id
//     }]
// })

// corpo.save()
// const roadTeste = Road.find().populate("activities[0].informations").exec()
// console.log(roadTeste)

