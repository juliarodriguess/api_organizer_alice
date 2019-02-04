const restful = require('node-restful')
const Schema = restful.mongoose.Schema

const activitySchema = new Schema({
    _id: { type: Schema.Types.ObjectId, auto: true },
    title: { type: String },
    local: { type: String },
    status: { type: String, default: "ACTIVE" },
    comments: { type: String }
})

module.exports = restful.model('Activity', activitySchema)