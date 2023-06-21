const { exec } = require('../db/mysql');
const xss = require('xss');

const getList = (author, keyword) => {
  let sql = `select * from blogs where 1=1 `;
  if (author) {
    sql += `and author='${author}'`;
  }
  if (keyword) {
    sql += `and title like '%${keyword}%'`;
  }
  sql += `order by createtime desc;`;
  // 返回的是一个promise
  return exec(sql);
};

const getDetail = (id) => {
  const sql = `select * from blogs where id='${id}'`;
  return exec(sql).then((rows) => {
    return rows[0];
  });
};

const newBlog = (blogData = {}) => {
  // blogData是一个博客对象，包含title content属性
  const title = xss(blogData.title);
  const { content, author } = blogData;
  const createTime = Date.now();
  const sql = `insert into blogs (title,content,createtime,author) values ('${title}','${content}','${createTime}','${author}');`;
  return exec(sql).then((insertData) => {
    console.log('insertData is', insertData);
    return {
      id: insertData.insertId,
    };
  });
};

const updateBlog = (id, blogData = {}) => {
  // id就是要更新博客的id
  const title = blogData.title;
  const content = blogData.content;
  const sql = `update blogs set title='${title}', content='${content}' where id=${id};`;

  return exec(sql).then((updateData) => {
    // console.log('updateDate is ', updateData);
    if (updateData.affectedRows > 0) {
      return true;
    }
    return false;
  });
};

const delBlog = (id, author) => {
  // id要删除的博客的id
  const sql = `delete from blogs where id='${id}' and author='${author}';`;
  return exec(sql).then((delData) => {
    // console.log('delData is ', delData);
    if (delData.affectedRows > 0) {
      return true;
    }
    return false;
  });
};

module.exports = {
  getList,
  getDetail,
  newBlog,
  updateBlog,
  delBlog,
};
