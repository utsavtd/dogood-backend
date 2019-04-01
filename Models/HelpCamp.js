const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const HelpCampSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    description: {
        type: String,
    },
    address: {
        type: String,
    },
    lat: {
        type: Number,
    },
    lang: {
        type: Number,
    },
    user_id: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    }
}, {
    timestamps: {
        createdAt: 'created_at',
        updatedAt: 'updated_at'
    }
});




//Export model
module.exports = mongoose.model('HelpCamp', HelpCampSchema);