const { ErrorModel } = require('../model/resModel');

module.exports = async (ctx, next) => {
  if (ctx.session.username) {
    // 有的话说明已经登录了
    await next();
    return;
  }
  ctx.body = new ErrorModel('未登录');
};
