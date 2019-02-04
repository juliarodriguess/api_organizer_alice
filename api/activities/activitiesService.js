const Activity = require('./activities')

Activity.methods(['get', 'post', 'put', 'delete'])

Activity.updateOptions({new:true, runValidators: true})

module.exports = Activity