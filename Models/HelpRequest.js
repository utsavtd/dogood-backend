const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const HelpRequestSchema = new Schema({
    type: {
        type: String,
        required: true,
    },
    address: {
        type: String,
        required: true,
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
module.exports = mongoose.model('HelpRequest', HelpRequestSchema);