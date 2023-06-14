const getList = (author, keyword) => {
  // 先返回假数据
  return [
    {
      id: 1,
      title: '标题A',
      content: '内容A',
      createTime: 123465,
      author: 'zhangsan',
    },
    {
      id: 2,
      title: '标题B',
      content: '内容A',
      createTime: 123465,
      author: 'zhangsan',
    },
    {
      id: 3,
      title: '标题C',
      content: '内容A',
      createTime: 123465,
      author: 'zhangsan',
    },
  ];
};

const getDetail = (id) => {
  return {
    id: 1,
    title: '标题A',
    content: '内容A',
    createTime: 123465,
    author: 'zhangsan',
  };
};

const newBlog = (blogData = {}) => {
  // blogData是一个博客对象，包含title content属性
  console.log('newBlog blogData...', blogData);
  return {
    id: 3, // 表示新建博客，插入倒数据表里面的id
  };
};

const updateBlog = (id, blogData = {}) => {
  // id就是要更新博客的id
  console.log('update blog', id, blogData);
  return true;
};

const delBlog = (id) => {
  // id要删除的id
  return true;
};

module.exports = {
  getList,
  getDetail,
  newBlog,
  updateBlog,
  delBlog,
};
