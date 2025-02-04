const Post = require('../model/postmodel');
const Comment = require('../model/commendmodel');
const Like = require('../model/likemodel');



const createcomment = async (req, res) => {
    try {
        // Fetch data from req body
        const { post, body, user } = req.body;

        // Create comment object
        const obj = new Comment({
            post, user, body
        });
        console.log(obj);


        // Save the new comment in the database
        const saveComment = await obj.save();

        // Update the post to include the new comment
        const updatePost = await Post.findByIdAndUpdate(
            post,
            { $push: { comments: saveComment._id } },
            { new: true } // Return the updated document
        ).populate('comments').exec();

        // Send the updated post as a response
        res.json({
            post: updatePost,
        });

    } catch (error) {
        console.error(error); // Log the error for debugging
        return res.status(500).json({
            error: "Error while creating comment",
        });
    }
}

// Add a like to a post
const likePost = async (req, res) => {
    try {
        const { post, user, flag, } = req.body;


        // Create a like object (flag is optional here)


        const like = new Like({ post, user, flag, });
        if (flag === 1) {

            const savedLike = await like.save();

            // Update the post with the new like
            const updatedLike = await Post.findByIdAndUpdate(
                post,
                { $push: { likes: savedLike._id } },
                { new: true } // Return the updated post
            ).populate('likes').exec();

            // Send the updated post as a response
            res.json({ post: updatedLike });
        } else if (flag === 0) {

            const savedLike = await like.save();

            // Update the post with the new like
            const updatedLike = await Post.findByIdAndUpdate(
                post,
                { $push: { likes: savedLike._id } },
                { new: true } // Return the updated post
            ).populate('likes').exec();

            // Send the updated post as a response
            res.json(
                {
                    post: updatedLike,

                }
            );

        } else {
            return;
        }
    } catch (error) {
        console.error("Error in likePost:", error);
        res.status(500).json({ error: "Failed to add like to post." });
    }
};

const createPost = async (req, res) => {

    try {

        const { title, body } = req.body;

        const postcreate = new Post({
            title, body
        });

        const savePost = await postcreate.save();
        res.json(
            {
                post: savePost,

            }
        );

    } catch (error) {
        console.error("Error in createPost:", error);
        res.status(500).json({ error: "Failed to add post." });
    }

}
const fetchPost = async (req, res) => {

    try {
        const getpost = await Post.find({}).populate('likes').populate('comments').exec();

        //response
        res.status(200).json({
            success: true,
            post: getpost,
            message: 'fetch all data successfully',
        });

    } catch (error) {
        console.error("Error in fetchPost:", error);
        res.status(500).json({ error: "Failed to fetch post." });
    }

}

const unlikePost = async (req, res) => {
    try {
        const { post, like } = req.body;

        const deleteLike = await Like.findOneAndDelete({ post: post, _id: like });

        const updatepostlike = await Post.findByIdAndUpdate(post, { $pull: { likes: deleteLike._id } }, { new: true }).populate('likes').exec();
        res.json(
            {
                post: updatepostlike,

            }
        );
    } catch (error) {
        console.error("Error in delete like Post:", error);
        res.status(500).json({ error: "Failed to delete like post." });
    }
}


module.exports = {
    createcomment,
    likePost,
    createPost,
    fetchPost,
    unlikePost,
};
