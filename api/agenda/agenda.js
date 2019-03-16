const restful = require('node-restful')
const Schema = restful.mongoose.Schema

const agendaSchema = new Schema({
    _id: { type: Schema.Types.ObjectId, auto: true },
    time : { type : Date, default: Date.now },
    user: {
        fullName: { type: String },
        classroom: { type: String },
    },
    roadsPriority: [{
        index: { type: Number },
        id: { type: String }
    }],
    roadChosen: { type: String },
    attendance: [
        {
            monday: {type: Boolean, default: false }
        },
        {
            tuesday: {type: Boolean, default: false }
        },
        {
            wednesday: {type: Boolean, default: false }
        },
        {
            thursday: {type: Boolean, default: false }
        },
        {
            friday: {type: Boolean, default: false}
        }
    ]
})

module.exports = restful.model('Agenda', agendaSchema)