const fs = require('fs');
const path = require('path');

const fileName = path.resolve(__dirname, 'data.txt'); // 当前目录下的txt

// 读取文件的内容
fs.readFile(fileName, (err, data) => {
  if (err) {
    console.error(err);
    return;
  }
  // data是二进制类型，需要转换为字符串
  console.log(data.toString());
});

// 写入文件
const content = '这是新写入的内容\n';
const opt = {
  flag: 'a', // 追加写入，覆盖用w
};

fs.writeFile(fileName, content, opt, (err) => {
  if (err) {
    console.log(err);
  }
});

// 判断文件是否存在
fs.open(fileName + '1', (exist) => {
  console.log('exist', exist);
});
