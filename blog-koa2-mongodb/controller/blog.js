// const { exec } = require('../db/mysql');
const Blog = require('../db/models/Blog');
const xss = require('xss');

const getList = async (author, keyword) => {
  // let sql = `select * from blogs where 1=1 `;
  // if (author) {
  //   sql += `and author='${author}'`;
  // }
  // if (keyword) {
  //   sql += `and title like '%${keyword}%'`;
  // }
  // sql += `order by createtime desc;`;
  // // 返回的是一个promise
  // return await exec(sql);

  const whereOpt = {};
  if (author) whereOpt.author = author;
  if (keyword) whereOpt.keyword = new RegExp(keyword);
  const list = await Blog.find(whereOpt).sort({ _id: -1 });
  return list;
};

const getDetail = async (id) => {
  // const sql = `select * from blogs where id='${id}'`;
  // const rows = await exec(sql);
  // return rows[0];

  const blog = await Blog.findById(id);
  return blog;
};

const newBlog = async (blogData = {}) => {
  // blogData是一个博客对象，包含title content属性
  // const title = xss(blogData.title);
  // const { content, author } = blogData;
  // const createTime = Date.now();
  // const sql = `insert into blogs (title,content,createtime,author) values ('${title}','${content}','${createTime}','${author}');`;
  // const insertData = await exec(sql);
  // return {
  //   id: insertData.insertId,
  // };
  const title = xss(blogData.title);
  const content = xss(blogData.content);
  const author = blogData.author;
  const blog = await Blog.create({
    title,
    content,
    author,
  });
  return {
    id: blog._id,
  };
};

const updateBlog = async (id, blogData = {}) => {
  //   // id就是要更新博客的id
  //   const title = blogData.title;
  //   const content = blogData.content;
  //   const sql = `update blogs set title='${title}', content='${content}' where id=${id};`;
  //   const updateDate = await exec(sql);
  //   if (updateDate.affectedRows > 0) {
  //     return true;
  //   }
  //   return false;
  // };
  // const delBlog = async (id, author) => {
  //   // id要删除的博客的id
  //   const sql = `delete from blogs where id='${id}' and author='${author}';`;
  //   const delData = await exec(sql);
  //   if (delData.affectedRows > 0) {
  //     return true;
  //   }
  //   return false;
  const title = xss(blogData.title);
  const content = xss(blogData.content);
  const blog = await Blog.findOneAndUpdate(
    { _id: id },
    { title, content },
    {
      new: true,
    }
  );
  if (blog == null) return false;
  return true;
};

const delBlog = async (id, author) => {
  const blog = await Blog.findOneAndDelete({
    _id: id,
    author,
  });
  if (blog == null) return false;
  return true;
};

module.exports = {
  getList,
  getDetail,
  newBlog,
  updateBlog,
  delBlog,
};
