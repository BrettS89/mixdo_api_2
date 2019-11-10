const { errorHandler, checkExists } = require('../handlers/errorHandlers');
const successHandler = require('../handlers/successHandler');
const authService = require('../services/auth');
const validateData = require('../utils/validateData');

exports.signup = async (req, res) => {
  try {
    validateData('signup', req.body);
    let user = await authService.getOneUser('email', req.body.email);
    if (user) {
      throw {
        error: new Error('user already exists'),
        status: 400,
      }
    }
    await authService.createUser(req.body);
    user = await authService.getOneUser('username', req.body.username);
    const token = authService.createToken(user.id);
    const message = { message: 'user created' };
    successHandler(res, 201, message, token);
  } catch(e) {
    errorHandler(res, e, 'signup');
  }
};

exports.login = async (req, res) => {
  try {
    validateData('login', req.body);
    const user = await authService.getOneUser('email', req.body.email);
    await checkExists(user, 'user');
    await authService.checkPassword(req.body.password, user.password);
    const token = authService.createToken(user.id);
    const message = { message: 'login success' };
    successHandler(res, 200, message, token);
  } catch(e) {
    errorHandler(res, e, 'login');
  }
};
