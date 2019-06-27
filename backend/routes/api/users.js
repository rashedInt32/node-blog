import express from 'express';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import { config } from '../../config';
import User from '../../models/UserSchema';

const router = express.Router();

/**
 * @routes GET /api/user/register
 * @desc Register routes
 * @api public
 */
router.post('/register', async (req, res) => {
  const { name, email, password } = req.body;
  const result = await User.findOne({ email });

  if (result !== null)
    return res.json({ msg: 'Email already exist' });

  const user = new User({ name, email, password });

  // Generates hash for password
  bcrypt.genSalt(10, (err, salt) => {
    bcrypt.hash(user.password, salt, async (err, hash) => {
      user.password = hash;
      await user.save();
    });
  });

  return res.json({ msg: 'User saved to db' });
});

/**
 * @routes GET /api/user/login
 * @desc Login routes
 * @api public
 */
router.post('/login', async (req, res) => {
  const { email, password } = req.body;

  const result = await User.findOne({ email });
  if (result === null)
    return res.json({ msg: 'Email Not found' });

  const isPasswordMatch = await bcrypt.compareSync(password, result.password);
  if (!isPasswordMatch)
    return res.json({ msg: 'Password is wrong' });

  let token = jwt.sign({ email }, config.secret , { expiresIn: '24h' });
  return res.json({
    success: true,
    message: 'Authentication successful!',
    token
  });
});

export default router;
