const mongoose = require('mongoose');

// route handlar;
const likeSchema = mongoose.Schema({
    post: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Post", // this is refarence of id  of post model,
    },
    user: {
        type: String,
        require: true,
    },
    flag: {
        type: Number,
        require: true,
    },
    flag: {
        type: Number,
        required: true,
        enum: [0, 1], // 0 for unlike, 1 for like
    },
    messege: {
        type: String,
        require: true,
    }



}, { timestamps: true });
module.exports = mongoose.model('Like', likeSchema);