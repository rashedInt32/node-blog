import express from 'express';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import { config } from '../../config';
import User from '../../models/UserSchema';
import verifyToken from '../../utils/verifyToken';

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
    return res.send({ error: true, msg: 'Email already used' });

  const user = new User({ name, email, password });

  // Generates hash for password
  bcrypt.genSalt(10, (err, salt) => {
    bcrypt.hash(user.password, salt, async (err, hash) => {
      user.password = hash;
      await user.save();
    });
  });

  return res.status(200).send({ message: 'Registration success' });
});

/**
 * @routes GET /api/user/login
 * @desc Login routes
 * @api public
 */
router.post('/login', async (req, res) => {
  const { email, password } = req.body;

  const user = await User.findOne({ email });
  if (user === null)
    return res.send({error: true, msg: 'Email Not found' });

  const isPasswordMatch = await bcrypt.compareSync(password, user.password);
  if (!isPasswordMatch)
    return res.send({ error: true, msg: 'Password is wrong' });

  let token = jwt.sign({ user }, config.secret , { expiresIn: '24h' });
  return res.status(200).send({
    error: false,
    auth: true,
    message: 'Authentication successful!',
    token
  });
});

/**
 * @routes GET /api/user/logout
 * @desc auth routes
 * @api private
 */
router.get('/logout', (req, res) => {
  res.send({ auth: false, token: '' });
});

/**
 * @routes GET /api/user/auth
 * @desc auth routes
 * @api private
 */
router.get('/auth', verifyToken,  async (req, res) => {
  await User.find({ email: req.email }, (err, user) => {
    if (err)
      return res.status(500).send("There was a problem finding the user.");
    if (!user)
      return res.status(404).send("No user found.");

    res.status(200).send(user);
  });
});

export default router;
