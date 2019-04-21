const mongoose = require('../../config/database');
const Schema = mongoose.Schema;

let RoadSchema = new Schema({
    _id: { type: Schema.Types.ObjectId, auto: true },
    title: { type: String },
    status: { type: String, default: "NOT_SELECTED" },
    position: { type: Number, default: 0 },
    activities: [{
        informations: { 
            title: { type: String },
            local: { type: String },
            status: { type: String, default: "ACTIVE" }
        },
        slots: [
            {
                day: {
                number: { type: Number },
                period: { type: [Number] }
            }
            }
        ]
    }]
});

let Road = mongoose.model('Road', RoadSchema);

module.exports = Road;