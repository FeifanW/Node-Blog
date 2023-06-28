const MongoClient = require('mongodb').MongoClient;

const url = 'mongodb://127.0.0.1:27017';
const dbName = 'myblog';

MongoClient.connect(
  url,
  {
    // 配置
    useUnifiedTopology: true,
  },
  (err, client) => {
    if (err) {
      console.error('mongodb connect error', err);
      return;
    }
    console.log('mongodb connect success');
    // 切换到数据库，控制台 use myblog
    const db = client.db(dbName);

    // 使用集合
    const usersCollection = db.collection('users');

    // 新增
    // usersCollection.insertOne(
    //   {
    //     username: 'wangwu',
    //     password: 'abc',
    //     realname: 'test',
    //   },
    //   (err, result) => {
    //     if (err) {
    //       console.error('users insert error', err);
    //       return;
    //     }
    //     console.log(result);
    //     // 关闭连接
    //     client.close();
    //   }
    // );

    // 修改
    // usersCollection.updateOne(
    //   { username: 'zhangsan' },
    //   { $set: { realname: '张三ttt' } },
    //   (err, result) => {
    //     if (err) {
    //       console.error('users update error', err);
    //       return;
    //     }
    //     console.log(result);
    //     // 关闭连接
    //     client.close();
    //   }
    // );

    // 删除
    usersCollection.deleteOne({ username: 'wangwu' }, (err, result) => {
      if (err) {
        console.error('users delete error', err);
        return;
      }
      console.log(result);
      // 关闭连接
      client.close();
    });

    // 查询
    // usersCollection.find({ username: 'zhangsan' }).toArray((err, result) => {
    //   if (err) {
    //     console.error('users find error', err);
    //     return;
    //   }
    //   console.log(result);
    //   // 关闭连接
    //   client.close();
    // });
  }
);
