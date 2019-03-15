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
            monday: {type: Boolean}
        },
        {
            tuesday: {type: Boolean}
        },
        {
            wednesday: {type: Boolean}
        },
        {
            thursday: {type: Boolean}
        },
        {
            friday: {type: Boolean}
        }
    ]
})

module.exports = restful.model('Agenda', agendaSchema)