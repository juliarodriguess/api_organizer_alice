const Road = require('./roads')

Road.methods(['get', 'post', 'put', 'delete'])

Road.updateOptions({new:true, runValidators: true})

module.exports = Road