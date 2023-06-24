const Sequelize = require('sequelize');
const seq = require('../seq');

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

module.exports = User;
