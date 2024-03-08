const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    bookingStart: {
        type: Date,
        required: true
    },
    bookingEnd: {
        type: Date,
        required: true
    },
    startHour: {
        type: Number,
        required: true
    },
    duration: {
        type: Number,
        default: false
    },
    meetingRoomId: {
        type: mongoose.Schema.ObjectId,
        ref: 'MeetingRoom',
        required: true,
      },
})

userSchema.virtual('id').get(function () {
    return this._id.toHexString();
});

userSchema.set('toJSON', {
    virtuals: true,
});

module.exports = mongoose.model('User', userSchema);