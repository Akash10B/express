const mongoose = require('mongoose');

const commentSchema = mongoose.Schema({
    post: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Post", // this is refarence of id  of post model,
    },
    user: {
        type: String,
        require: true,
    },
    body: {
        type: String,
        require: true,
    }
});
module.exports = mongoose.model('Comment', commentSchema);