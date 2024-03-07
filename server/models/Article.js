const { Schema, model } = require('mongoose');

const articleSchema = new Schema ({
    userID: {
        type: Schema.Types.ObjectId,
        ref: 'User',
    },
    url: {
        type: String,
    }
});

const Article = mongoose.model('Article', articleSchema);
module.exports = Article;