const { errorHandler } = require('../handlers/errorHandlers');
const successHandler = require('../handlers/successHandler');
const validateData = require('../utils/validateData');
const userService = require('../services/users');
const tokenUtils = require('../utils/tokenUtils');

exports.followUser = async (req, res) => {
  try {

  } catch(e) {
    errorHandler(res, e, 'followUser');
  }
};

exports.unfollowUser = async (req, res) => {
  try {

  } catch(e) {
    errorHandler(res, e, 'unfollowUser');
  }
};

exports.discoverUsers = async (req, res) => {
  try {

  } catch(e) {
    errorHandler(res, e, 'discoverUsers');
  }
};

exports.getFollowers = async (req, res) => {
  try {

  } catch(e) {
    errorHandler(res, e, 'getFollowers');
  }
};

exports.getFollowees = async (req, res) => {
  try {

  } catch(e) {
    errorHandler(res, e, 'getFollowees');
  }
};