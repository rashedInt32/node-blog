import express from 'express';
import bcrypt from 'bcryptjs';
import User from '../../models/UserSchema';

const router = express.Router();

/**
 * @routes GET /api/user/register
 * @desc Register routes
 * @api public
 */
router.post('/register', async (req, res) => {
  const { name, email, password } = req.body;

  await User.findOne({ email }, (err, user) => {
    if (user !== null)
      return res.json({ msg: 'Email already exist' });
  });

  const user = new User({ name, email, password });

  // Generates hash for password
  bcrypt.genSalt(10, (err, salt) => {
    bcrypt.hash(user.password, salt, (err, hash) => {
      user.password = hash;
      user.save();
    })
  });
});

export default router;
