const mongoose = require('mongoose');

mongoose.connect('mongodb://admin:alice2018@ds219095.mlab.com:19095/organizerdb', { useNewUrlParser: true });
mongoose.Promise = global.Promise;

module.exports = mongoose;