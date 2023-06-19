const crypto = require('crypto');

// 密匙
const SECRET_KEY = 'HELLO';

// md5加密
function md5(content) {
  let md5 = crypto.createHash('md5');
  return md5.update(content).digest('hex');
}

// 加密函数
function genPassword(password) {
  const str = `password=${password}&key=${SECRET_KEY}`;
  return md5(str);
}

const res = genPassword(456);
console.log('res', res);

module.exports = {
  genPassword,
};
