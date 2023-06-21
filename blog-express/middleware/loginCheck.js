const { ErrorModel } = require('../model/resModel');

module.exports = (req, res, next) => {
  if (req.session.username) {
    // 有的话说明已经登录了
    next();
    return;
  }
  res.json(new ErrorModel('未登录'));
};
