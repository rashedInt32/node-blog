import express from 'express';
import bcrypt from 'bcryptjs';
import User from '../../models/UserSchema';

const router = express.Router();

/**
 * @routes GET /api/user/register
 * @desc Register routes
 * @api public
 */
router.post('/register', (req, res) => {
  const { name, email, password } = req.body;
  const isEmailAlreadyRegistered = User.find({email});
  if (isEmailAlreadyRegistered)
    return res.json({ msg: 'Email already used' });

  const user = new User({ name, email, password });

  bcrypt.genSalt(10, (err, salt) => {
    bcrypt.hash(user.password, salt, (err, hash) => {
      user.password = hash;
      user.save();
    })
  });
  return res.json({ user });
});

export default router;
