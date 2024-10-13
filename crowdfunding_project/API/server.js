const express = require('express');
const mysql = require('mysql2');
const cors = require('cors'); // 导入 cors 中间件

const app = express();
const PORT = process.env.PORT || 3000;
app.use(cors());

// 数据库连接
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '123456', // 数据库密码
    database: 'crowdfunding_db'
});

db.connect((err) => {
    if (err) throw err;
    console.log('Database connection successful！');
});

app.use(express.json());

// 获取所有筹款信息
app.get('/fundraisers', (req, res) => {
    db.query('SELECT f.*, c.name AS category_name, CASE WHEN f.active = 1 THEN "YES" ELSE "NO" END AS active_status FROM FUNDRAISER f JOIN CATEGORY c ON f.category_id = c.CATEGORY_ID', (err, results) => {
        if (err) return res.status(500).send(err);
        res.json(results);
    });
});

// 获取所有活跃的筹款活动
app.get('/fundraisers/active', (req, res) => {
    const { CATEGORY, ORGANIZER, CITY } = req.query;

    let query = 'SELECT f.*, c.name AS category_name, CASE WHEN f.active = 1 THEN "YES" ELSE "NO" END AS active_status FROM FUNDRAISER f JOIN CATEGORY c ON f.category_id = c.CATEGORY_ID WHERE f.active = TRUE';
    const params = [];

    if (CATEGORY) {
        query += ' AND c.name = ?';
        params.push(CATEGORY);
    }
    if (ORGANIZER) {
        query += ' AND f.organizer LIKE ?';
        params.push(`%${ORGANIZER}%`);
    }
    if (CITY) {
        query += ' AND f.city LIKE ?';
        params.push(`%${CITY}%`);
    }

    console.log('Generated SQL query:', query, params);

    db.query(query, params, (err, results) => {
        if (err) {
            console.error('Query error:', err);
            return res.status(500).send(err);
        }
        res.json(results);
    });
});

// 获取所有类别
app.get('/categories', (req, res) => {
    db.query('SELECT * FROM CATEGORY', (err, results) => {
        if (err) return res.status(500).send(err);
        res.json(results);
    });
});

// 根据条件获取活跃的筹款项目
app.get('/search', (req, res) => {
    const { organizer, city, category } = req.query;
    let query = 'SELECT *, CASE WHEN active = 1 THEN "YES" ELSE "NO" END AS active_status FROM FUNDRAISER WHERE active = 1';
    const criteria = [];

    if (organizer) criteria.push(`organizer = '${organizer}'`);
    if (city) criteria.push(`city = '${city}'`);
    if (category) criteria.push(`category = '${category}'`);

    if (criteria.length > 0) {
        query += ' AND ' + criteria.join(' AND ');
    }

    db.query(query, (err, results) => {
        if (err) return res.status(500).send(err);
        res.json(results);
    });
});

// 获取特定筹款活动
app.get('/fundraisers/:id', (req, res) => {
    const fundraiserId = req.params.id;
    // 查询数据库并返回筹款人的详细信息
    const query = 'SELECT * FROM FUNDRAISER WHERE FUNDRAISER_ID = ?';
    db.query(query, [fundraiserId], (error, results) => {
        if (error) {
            return res.status(500).json({ error: 'Database query error' });
        }
        if (results.length > 0) {
            res.json(results[0]);
        } else {
            res.status(404).json({ error: 'Fundraiser not found' });
        }
    });
});

// 添加筹款活动
app.post('/fundraisers', (req, res) => {
    const { organizer, caption, target_funding, current_funding, city, active, category  } = req.params.body;
    // 插入筹款人的详细信息
    const query = 'INSERT INTO FUNDRAISER(ORGANIZER,CAPTION,TARGET_FUNDING,CURRENT_FUNDING,CITY,ACTIVE,CATEGORY_ID) VALUES(?,?,?,?,?,?,?)';
    db.query(query, [organizer,caption, target_funding, current_funding, city, active, category], (error, results) => {
        if (error) {
            return res.status(500).json({ error: 'Database insert error' });
        }
        res.json({ message: "inserted!" });
    });
});

// 更新筹款活动
app.post('/fundraisers', (req, res) => {
    const { fundraiserId, organizer, caption, target_funding, current_funding, city, active, category  } = req.params.body;
    // 插入筹款人的详细信息
    const query = 'UPDATE FUNDRAISER SET ORGANIZER = ?, CAPTION = ?, TARGET_FUNDING = ?, CURRENT_FUNDING = ?, CITY = ?, ACTIVE = ?, CATEGORY_ID = ? WHERE FUNDRAISER_ID = ?;';
    db.query(query, [organizer,caption, target_funding, current_funding, city, active, category, fundraiserId], (error, results) => {
        if (error) {
            return res.status(500).json({ error: 'Database update error' });
        }
        res.json({ message: "updated!" });
    });
});

// 删除筹款活动
app.post('/fundraisers/:id', (req, res) => {
    const fundraiserId = req.params.id;;
    // 插入筹款人的详细信息
    const query = 'DELETE FROM FUNDRAISER WHERE FUNDRAISER_ID = ?;';
    db.query(query, [fundraiserId], (error, results) => {
        if (error) {
            return res.status(500).json({ error: 'Database delete error' });
        }
        res.json({ message: "deleted!" });
    });
});



// 启动服务器
app.listen(PORT, () => {
    console.log(`The server is running on http://localhost:${PORT}`);
});
