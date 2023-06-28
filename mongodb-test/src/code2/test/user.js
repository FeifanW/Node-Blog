const User = require('../models/User');

// 自执行的异步函数
!(async () => {
  // 创建用户
  // const zhangsan = await User.create({
  //   username: 'zhaosi',
  //   password: '123',
  //   realname: '赵四',
  // });
  // console.log(zhangsan);

  // 模拟登录
  const zhangsan = await User.find({
    username: 'zhaosi',
    password: '123',
  });
  console.log(zhangsan);
})();
