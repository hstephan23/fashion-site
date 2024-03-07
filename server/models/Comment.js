const { Schema, model } = require('mongoose');

const commentSchema = new Schema({
    userID: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true,
    },
    comment: {
        type: String,
        maxlength: 200,
    }
});

module.exports = commentSchema;