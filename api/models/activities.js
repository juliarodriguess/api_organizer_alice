const mongoose = require('../../config/database');
const Schema = mongoose.Schema;

let ActivitySchema = new Schema({
    _id: { type: Schema.Types.ObjectId, auto: true },
    title: { type: String },
    local: { type: String },
    description: { type: String },
    materials: { type: String },
    link: { type: String },
    status: { type: String, default: "ACTIVE" },
    comments: { type: String }
});

let Activity = mongoose.model('Activity', ActivitySchema);

module.exports = Activity;