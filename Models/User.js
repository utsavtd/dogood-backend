const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const Schema = mongoose.Schema;

const UserSchema = new Schema({
    first_name: {
        type: String,
        required: true,
    },
    last_name: {
        type: String,
        required: true
    },
    type: {
        type: String,
        required: true
    },
    
    email: {
        type: String,
        index: true,
        unique: true,
        lowercase: true
    },
    password: {
        type: String,
        required: true
    }

}, {
    timestamps: {
        createdAt: 'created_at',
        updatedAt: 'updated_at'
    }
});

// Genereate the password before saving
UserSchema.pre('save', async function (next) {
    try {

        // Generate a salt
        const salt = bcrypt.genSaltSync(parseInt(process.env.SALT_ROUND));
        const hashedPassword = bcrypt.hashSync(this.password, salt);
        this.password = hashedPassword;
        next();
    } catch (error) {
        next(error);
    }
});


//Export model
module.exports = mongoose.model('User', UserSchema);