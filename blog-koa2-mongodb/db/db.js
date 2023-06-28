const mongoose = require('mongoose');

const url = 'mongodb://127.0.0.1:27017';
const dbName = 'myblog';

mongoose.connect(`${url}/${dbName}`, {});

const db = mongoose.connection;

db.on('error', (err) => {
  console.error(err);
});

// db.once('open', () => {
//   console.log('mongoose connect success');
// });

module.exports = mongoose;
