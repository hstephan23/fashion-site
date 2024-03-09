const { Schema, model } = require('mongoose');
const commentSchema = require('./Comment');

const postSchema = new Schema({
    text: {
        type: String,
        minlength: 15,
        maxlength: 250,
    },
    published: {
        type: Boolean,
        default: false,
    },
    createdAt: {
        type: Date,
        default: Date.now(),
    },
    comments: [commentSchema],
});

const Post = model('Post', postSchema);
module.exports = Post;