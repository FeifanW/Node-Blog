const Sequelize = require('sequelize');
const seq = require('./db');

// User模型
const User = seq.define(
  'user', // 对应同步到数据库的users表
  {
    // id不用自己定义，sequelize会帮我们增加上
    username: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    password: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    realname: {
      type: Sequelize.STRING,
    },
  }
);

// Blog模型
const Blog = seq.define(
  'blog', // 对应同步到数据库的blogs表
  {
    // id不用自己定义，sequelize会帮我们定义
    title: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    content: {
      type: Sequelize.TEXT, // 存储大文件
      allowNull: false,
    },
    author: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    //id createdAt updatedAt 会被自动创建
  }
);

module.exports = { User, Blog };
