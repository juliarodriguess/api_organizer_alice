const mongoose = require('../../config/database');
const Schema = mongoose.Schema;

let AgendaSchema = new Schema({
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
    attendance: [{
        day: {type: String},
        status: {type: Boolean}
    }]
});

let Agenda = mongoose.model('Agenda', AgendaSchema);

module.exports = Agenda;