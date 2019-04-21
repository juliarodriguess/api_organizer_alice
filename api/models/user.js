const mongoose = require('../../config/database');
const Schema = mongoose.Schema;

let UserSchema = new Schema({
    _id: { 
        type: Schema.Types.ObjectId, 
        auto: true 
    },
    fullName: { 
        type: String,
        required: true
    },
    classroom: { 
        type: String
    },
    email: { 
        type: String 
    },
    userType: { 
        type: String,
        required: true
    }
});

let User = mongoose.model('User', UserSchema);

module.exports = User;