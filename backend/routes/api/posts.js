import express from 'express';
import Post from '../../models/PostSchema';

const router = express.Router();

/**
 * @route GET /api/posts
 * @desc get all posts
 * @api public
 */
router.get('/', async (req, res) => {
  await Post.find({}, (err, posts) => {
    res.send(posts);
  });
});

/**
 * @route GET /api/posts
 * @desc get all posts
 * @api public
 */
router.get('/post/:id', async (req, res) => {
  await Post.find({_id: req.params.id}, (err, post) => {
    if (err) return res.status(403).send('Post not found');
    res.send(post);
  })
});

/**
 * @route POST /api/posts/post
 * @desc get all posts
 * @api public
 */
router.post('/createpost', (req, res) => {
  const { title, author, text } = req.body;
  const post = new Post({
    title, author, text
  });

  post.save();
  res.send(post);
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
