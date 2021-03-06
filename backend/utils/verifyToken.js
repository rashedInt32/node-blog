import jwt from 'jsonwebtoken';

import { config } from '../config';

const verifyToken = (req, res, next) => {
  const token = req.headers['x-access-token'];
  if (!token)
    return res.status(403).send({
      auth: false,
      message: 'No token provided'
    });

  jwt.verify(token, config.secret, (err, decode) => {
    if (err)
      return res.status(500).send({
        auth: false,
        message: 'Failed to authenticate token'
      });

    req.email = decode.email;
    next();
  })
};

export default verifyToken;
