

const mysql = require('mysql2');

// 创建一个连接到MySQL数据库的连接
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'stw.5255.molu', // 用你当前的用户密码替换
  database: 'crowdfunding_db' // 用你的数据库名称替换
});

connection.connect(err => {
  if (err) throw err;
  console.log('Connected to the database.');

  // 执行ALTER USER命令
  const alterUserQuery = `
    ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY 'stw.5255.molu';
  `;

  connection.query(alterUserQuery, (err, results) => {
    if (err) throw err;
    console.log('User password changed successfully.');
    connection.end();
  });
});
