const restful = require('node-restful')
const Schema = restful.mongoose.Schema

const userSchema = new Schema({
    _id: { type: Schema.Types.ObjectId, auto: true },
    fullName: { type: String },
    classroom: { type: String },
    email: { type: String },
    userType: { type: String }
})

module.exports = restful.model('User', userSchema)