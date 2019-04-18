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
        option: { type: Number },
        title: { type: String },
        id: { type: String }
    }],
    roadChosen: { type: String },
    attendance: [
       { monday: {type: String }},
       { tuesday: {type: String }},
       { wednesday: {type: String }},
       { thursday: {type: String }},
       { friday: {type: String }},
       { saturday: {type: String }},
       { sunday: {type: String } }
    ]
})

module.exports = restful.model('Agenda', agendaSchema)