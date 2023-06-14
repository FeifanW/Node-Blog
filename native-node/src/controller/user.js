const loginCheck = (username, password) => {
  // 先使用假数据
  if (username === 'zhangsan' && password === '123') {
    return {
      msg: '这是登录的接口',
    };
  }
};

module.exports = {
  loginCheck,
};
