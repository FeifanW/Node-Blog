const Sequelize = require('sequelize');
const { User, Blog } = require('./model');

!(async function () {
  const res = await Blog.destroy({
    // 条件
    where: {
      id: 2,
      author: 'zhangsan',
    },
  });
  console.log(res);
})();
