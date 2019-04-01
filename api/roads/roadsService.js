const Road = require('./roads')

Road.methods(['get', 'post', 'put','options', 'patch', 'delete'])

Road.updateOptions({new:true, runValidators: true})

module.exports = Road