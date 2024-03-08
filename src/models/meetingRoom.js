const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    code: {
        type: String,
        required: true
    },
    capacity: {
        type: String,
        required: true
    },
    equipment: {
        type: String,
        required: true
    },
    disponibility: {
        type: String,
        required: true
    },
    isAdmin: {
        type: Boolean,
        default: false
    }
})

userSchema.virtual('id').get(function () {
    return this._id.toHexString();
});

userSchema.set('toJSON', {
    virtuals: true,
});

module.exports = mongoose.model('User', userSchema);