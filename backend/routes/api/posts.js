import express from 'express';
import Post from '../../models/PostSchema';

const router = express.Router();

/**
 * @route GET /api/posts
 * @desc get all posts
 * @api public
 */
router.get('/', (req, res) => {
  Post.find({}, (err, posts) => {
    res.send(posts);
  })
});

/**
 * @route POST /api/posts/post
 * @desc get all posts
 * @api public
 */
router.post('/post', (req, res) => {
  const { title, author, text } = req.body;
  const post = new Post({
    title, author, text
  });

  post.save();
});

/**
 * @route DELETE /api/posts/delete/id
 * @desc get all posts
 * @api private
 */
router.delete('/delete/:id', async (req, res) => {
  const id = req.params.id;
  await Post.deleteOne({ _id: id });
});

/**
 * @route UPDATE /api/posts/update/id
 * @desc get all posts
 * @api private
 */
router.put('/update/:id', async (req, res) => {
  const id = req.params.id;
  const post = await Post.updateOne({ _id: id }, {
    $set: {
      title: req.body.title
    }
  });

  await post.save();
});

export default router;
