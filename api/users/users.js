const restful = require('node-restful')
const Schema = restful.mongoose.Schema

const userSchema = new Schema({
    _id: { type: Schema.Types.ObjectId, auto: true },
    firstName: { type: String },
    lastName: { type: String },
    class: { type: String },
    email: { type: String },
    userType: { type: String }
})

module.exports = restful.model('User', userSchema)