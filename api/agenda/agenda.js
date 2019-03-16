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
            monday: {type: Boolean, default: FALSE }
        },
        {
            tuesday: {type: Boolean, default: FALSE }
        },
        {
            wednesday: {type: Boolean, default: FALSE }
        },
        {
            thursday: {type: Boolean, default: FALSE }
        },
        {
            friday: {type: Boolean, default: FALSE }
        }
    ]
})

module.exports = restful.model('Agenda', agendaSchema)