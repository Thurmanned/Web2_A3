const mysql = require('mysql');

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root', // 替换为你的 MySQL 用户名
    password: 'stw.5255.molu', // 替换为你的 MySQL 密码
    database: 'crowdfunding_db'
});

connection.connect(err => {
    if (err) throw err;
    console.log('成功连接到数据库！');
});

module.exports = connection;
