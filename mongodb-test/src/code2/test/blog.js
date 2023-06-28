const Blog = require('../models/Blog');

!(async () => {
  // 新建博客
  // const blog1 = await Blog.create({
  //   title: '标题3',
  //   content: '内容3',
  //   author: 'shuangyue',
  // });
  // console.log(blog1);

  // 获取列表
  // const list = await Blog.find({
  //   title: /A/,
  // }).sort({ _id: -1 });
  // console.log(list);

  // 根据id获取单个博客
  // const blog3 = await Blog.findById('6499bc49b9952aca26fbd206');
  // console.log(blog3);

  // 修改博客
  // const res = await Blog.findOneAndUpdate(
  //   { _id: '6499bc49b9952aca26fbd206' },
  //   {
  //     content: '修改后的内容',
  //   },
  //   {
  //     new: true, // 返回修改之后的最新内容
  //   }
  // );
  // console.log(res);

  // 删除
  const res = await Blog.findOneAndDelete({
    _id: '6499bc49b9952aca26fbd206',
    author: 'shuangyue',
  });
  console.log(res);
})();
