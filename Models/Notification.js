const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const NotificationSchema = new Schema({
    text: {
        type: String,
        required: true,
    },


}, {
    timestamps: {
        createdAt: 'created_at',
        updatedAt: 'updated_at'
    }
});




//Export model
module.exports = mongoose.model('Notification', NotificationSchema);