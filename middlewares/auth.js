const jwt = require('jsonwebtoken');
const { SECRET_KEY } = require('../utils/constants');
const AuthError = require('../errors/AuthError');
// eslint-disable-next-line consistent-return
module.exports = (req, res, next) => {
  const { authorization } = req.headers;

  if (!authorization || !authorization.startsWith('Bearer ')) {
    return next(new AuthError('auth err1'));
  }
  const token = authorization.replace('Bearer ', '');
  let payload;
  try {
    payload = jwt.verify(token, SECRET_KEY);
  } catch (err) {
    return next(new AuthError('auth err2'));
  }
  req.user = payload;
  next();
};
