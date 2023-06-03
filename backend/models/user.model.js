const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const userSchema = new Schema({
    username: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        minlength: 2
    },
},
    {
        timestamps: true
    }
);

const User = mongoose.model('Suser', userSchema);

module.exports = User;