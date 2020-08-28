const mongoose = require('mongoose');
const userModel = mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    email: {
        type: String,
        required: true,
        match: /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/,
        trim: true
    },
    mobile: {
        type: Number,
        match: /^[1-9]{1}[0-9]{9}$/,
        maxLength: 13,
        minLength: 10,
        trim: true
    },
    password: {
        type: String,
        required: true,
        trim: true
    },
    isBrand: {
        type: Boolean,
        required: true
    },
    emailVerified: {
        type: Boolean,
        default: false
    },
    contactVerified: {
        type: Boolean,
        default: false
    },
    active: {
        type: Boolean,
        default: false
    },
    created_at: {
        type: Date,
        default: Date.now,
    }
});

module.exports = mongoose.model('Users', userModel);
