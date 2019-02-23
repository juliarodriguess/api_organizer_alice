const restful = require('node-restful')
const Schema = restful.mongoose.Schema

const agendaSchema = new Schema({
    _id: { type: Schema.Types.ObjectId, auto: true },
    user: {
        fullName: { type: String },
        classroom: { type: String },
    },
    roadsPriority: [{
        index: { type: Number },
        id: { type: String }
    }],
    roadChosen: { type: String }
})

module.exports = restful.model('Agenda', agendaSchema)