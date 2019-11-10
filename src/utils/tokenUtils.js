const jwt = require('jsonwebtoken');
const keys = require('../config');

exports.checkUserToken = async (token) => {
  if (!token) throw { 
    error: new Error('no auth token provided'),
    status: 401
  };

  try {
    await jwt.verify(token, keys.secret);
  } catch(e) {
    const error = (e.toString().split(' ')[2]);

    if(error === 'signature') {
      throw {
        error: new Error('token error'),
        status: 401,
      };
    }
  }

  const decodedUser = jwt.decode(token);

  if(decodedUser === null) {
    throw {
      error: new Error('token error'),
      status: 401,
    };
  }

  const newToken = jwt.sign({ user: decodedUser.user }, keys.jwtSecret, { expiresIn: 1 });
  return { user: decodedUser.user, newToken };
};
