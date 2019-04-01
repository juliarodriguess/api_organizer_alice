const Activity = require('./activities')

Activity.methods(['get', 'post', 'put','options', 'patch', 'delete'])

Activity.updateOptions({new:true, runValidators: true})

module.exports = Activity