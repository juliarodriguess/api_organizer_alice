const restful = require('node-restful')
const Schema = restful.mongoose.Schema

const agendaSchema = new Schema({
    _id: { type: Schema.Types.ObjectId, auto: true },
    user: {
        fullName: { type: String },
        classRoom: { type: String },
    },
    roadsPriority: { type: [String]},
    roadChosen: { type: Number }
})

module.exports = restful.model('Agenda', agendaSchema)