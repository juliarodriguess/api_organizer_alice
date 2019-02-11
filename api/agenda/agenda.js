const restful = require('node-restful')
const Schema = restful.mongoose.Schema

const agendaSchema = new Schema({
    _id: { type: Schema.Types.ObjectId, auto: true },
    user: {
        name: { type: String },
        class: { type: String },
    },
    roadsPriority: { type: [Number]},
    roadChosen: { type: Number }
})

module.exports = restful.model('Agenda', agendaSchema)