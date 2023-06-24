const Sequelize = require('sequelize');
const { User, Blog } = require('./model');

!(async function () {
  // 登录，查询一条数据
  // const zhangsan = await User.findOne({
  //   // 查询条件
  //   where: {
  //     username: 'zhangsan',
  //     password: '213',
  //   },
  // });
  // if (zhangsan) {
  //   console.log(zhangsan.dataValues);
  // } else {
  //   console.log(zhangsan);
  // }

  // 查询多条语句，博客列表
  const blogList = await Blog.findAll({
    // 条件
    where: {
      author: 'zhangsan',
      title: { [Sequelize.Op.like]: '%标题%' }, // 模拟查询，和SQL语句一样
    },
    // 排序
    order: [['id', 'desc']], // SQL语句，order by id desc
  });
  console.log(
    'blogList',
    blogList.map((item) => item.dataValues)
  );
})();
