const Sequelize = require('sequelize');
const { User, Blog } = require('./model');

!(async function () {
  const res = await Blog.update(
    {
      title: '标题test',
      content: '内容test', // 要修改的内容
    },
    // 条件
    {
      where: {
        id: 2,
      },
    }
  );
  console.log('res', res);
})();
