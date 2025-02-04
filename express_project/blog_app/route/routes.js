const express = require('express');
const router = express.Router();
const { createPost, fetchPost, } = require('../controller/blogcontroller');

// router.post('/blog', createcomment);
// router.post('/bloglike', likePost);
router.post('/blogpost', createPost);
router.get('/blogfetch', fetchPost);
// router.post('/postlikedelete', unlikePost);


module.exports = router;
