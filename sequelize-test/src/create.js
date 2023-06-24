const { User, Blog } = require('./model');

// await语法
!(async function () {
  // 创建user
  // const zhangsan = await User.create({
  //   username: 'zhangsan',
  //   password: '213',
  //   realname: '张三',
  // });
  // console.log('zhangsan', zhangsan.dataValues);

  // 创建博客
  const blog = await Blog.create({
    title: '博客标标题BBB',
    content: '博客内容BBB',
    author: 'zhangsan',
  });
  console.log('blog', blog.dataValues);
})();
