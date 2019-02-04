const restful = require('node-restful')
const Schema = restful.mongoose.Schema

const roadSchema = new Schema({
    _id: { type: Schema.Types.ObjectId, auto: true },
    title: { type: String },
    status: { type: String, default: "NOT_SELECTED" },
    position: { type: Number, default: 0 },
    activities: [{
        informations: { type: Schema.Types.ObjectId, ref: 'Activity'},
        slots: [
            {
                day: {
                number: { type: Number },
                period: { type: [Number] }
            }
            }
        ]
    }],
    classList: { type: Schema.Types.ObjectId, ref: 'User'}
})

module.exports = restful.model('Road', roadSchema)