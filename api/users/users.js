const restful = require('node-restful')
const Schema = restful.mongoose.Schema

const userSchema = new Schema({
    _id: { type: Schema.Types.ObjectId, auto: true },
    profileObj: {
        givenName: { type: String },
        familyName:{ type: String },
        name: { type: String },
        imageUrl: { type: String },
        googleId: { type: String }
    },
    userType: { type: String }
})

module.exports = restful.model('User', userSchema)