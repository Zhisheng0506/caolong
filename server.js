// ============================================
// 湖口草龙博物馆 - 后端 API 服务器
// 启动方式：npm start 或 node server.js
// 默认端口：3000（可通过 PORT 环境变量修改）
// 数据库：SQLite（通过 sql.js，纯 JavaScript 实现，无需编译）
// ============================================

var express = require('express');
var cors = require('cors');
var initSqlJs = require('sql.js');
var fs = require('fs');
var path = require('path');

var app = express();
var PORT = process.env.PORT || 3000;

// ---- 中间件 ----
app.use(cors({ origin: '*' }));
app.use(express.json());
app.use(express.static(__dirname));  // 提供静态文件服务

// ---- 数据库 ----
var db;                  // sql.js Database 实例
var DB_PATH = path.join(__dirname, 'museum.db');

// 将数据库保存到磁盘
function saveDb() {
    try {
        var data = db.export();
        var buffer = Buffer.from(data);
        fs.writeFileSync(DB_PATH, buffer);
    } catch (err) {
        console.error('保存数据库失败:', err.message);
    }
}

// 创建表
function createTables() {
    db.run('\
        CREATE TABLE IF NOT EXISTS craft_registrations (\
            id INTEGER PRIMARY KEY AUTOINCREMENT,\
            name TEXT NOT NULL,\
            email TEXT NOT NULL,\
            phone TEXT NOT NULL,\
            message TEXT DEFAULT \'\',\
            created_at TEXT NOT NULL DEFAULT (datetime(\'now\', \'localtime\')),\
            ip_address TEXT DEFAULT \'\'\
        )\
    ');
    db.run('\
        CREATE TABLE IF NOT EXISTS exhibition_bookings (\
            id INTEGER PRIMARY KEY AUTOINCREMENT,\
            name TEXT NOT NULL,\
            phone TEXT NOT NULL,\
            visit_date TEXT NOT NULL,\
            number_of_people INTEGER NOT NULL DEFAULT 1,\
            created_at TEXT NOT NULL DEFAULT (datetime(\'now\', \'localtime\')),\
            ip_address TEXT DEFAULT \'\'\
        )\
    ');
    db.run('\
        CREATE TABLE IF NOT EXISTS orders (\
            id INTEGER PRIMARY KEY AUTOINCREMENT,\
            product_name TEXT NOT NULL,\
            price REAL NOT NULL,\
            quantity INTEGER NOT NULL DEFAULT 1,\
            customer_name TEXT NOT NULL,\
            phone TEXT NOT NULL,\
            address TEXT DEFAULT \'\',\
            created_at TEXT NOT NULL DEFAULT (datetime(\'now\', \'localtime\')),\
            ip_address TEXT DEFAULT \'\'\
        )\
    ');
    saveDb();
}

// ---- 验证函数 ----

function validateCraftRegistration(body) {
    var errors = [];
    if (!body.name || body.name.trim().length === 0) {
        errors.push('请填写您的姓名');
    }
    if (!body.email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(body.email)) {
        errors.push('请填写有效的电子邮箱');
    }
    if (!body.phone || !/^1[3-9]\d{9}$/.test(body.phone)) {
        errors.push('请填写有效的手机号码');
    }
    return errors;
}

function validateExhibitionBooking(body) {
    var errors = [];
    if (!body.name || body.name.trim().length === 0) {
        errors.push('请填写您的姓名');
    }
    if (!body.phone || !/^1[3-9]\d{9}$/.test(body.phone)) {
        errors.push('请填写有效的手机号码');
    }
    if (!body.visit_date) {
        errors.push('请选择参观日期');
    }
    var people = parseInt(body.number_of_people, 10);
    if (!body.number_of_people || isNaN(people) || people < 1 || people > 100) {
        errors.push('参观人数须在1-100之间');
    }
    return errors;
}

function validateOrder(body) {
    var errors = [];
    if (!body.product_name || body.product_name.trim().length === 0) {
        errors.push('商品信息缺失');
    }
    if (!body.customer_name || body.customer_name.trim().length === 0) {
        errors.push('请填写您的姓名');
    }
    if (!body.phone || !/^1[3-9]\d{9}$/.test(body.phone)) {
        errors.push('请填写有效的手机号码');
    }
    if (!body.address || body.address.trim().length === 0) {
        errors.push('请填写收货地址');
    }
    var qty = parseInt(body.quantity, 10);
    if (!body.quantity || isNaN(qty) || qty < 1 || qty > 99) {
        errors.push('购买数量须在1-99之间');
    }
    return errors;
}

// ---- 路由 ----

// 根路径由 express.static 自动提供 index.html
// 访问 http://localhost:3000 → 网站首页
// 访问 http://localhost:3000/admin.html → 后台管理

app.get('/api/health', function(req, res) {
    res.json({ status: 'ok', timestamp: new Date().toISOString() });
});

app.post('/api/craft-registration', function(req, res) {
    var errors = validateCraftRegistration(req.body);
    if (errors.length > 0) {
        return res.status(400).json({ success: false, errors: errors });
    }

    try {
        db.run(
            'INSERT INTO craft_registrations (name, email, phone, message, ip_address) VALUES (?, ?, ?, ?, ?)',
            [
                req.body.name.trim(),
                req.body.email.trim(),
                req.body.phone.trim(),
                (req.body.message || '').trim(),
                req.ip || ''
            ]
        );
        saveDb();
        console.log('[报名成功] name=' + req.body.name.trim());
        res.status(201).json({
            success: true,
            message: '报名成功！我们会尽快与您联系。'
        });
    } catch (err) {
        console.error('数据库错误:', err.message);
        res.status(500).json({
            success: false,
            message: '服务器错误，请稍后重试。'
        });
    }
});

app.post('/api/exhibition-booking', function(req, res) {
    var errors = validateExhibitionBooking(req.body);
    if (errors.length > 0) {
        return res.status(400).json({ success: false, errors: errors });
    }

    try {
        db.run(
            'INSERT INTO exhibition_bookings (name, phone, visit_date, number_of_people, ip_address) VALUES (?, ?, ?, ?, ?)',
            [
                req.body.name.trim(),
                req.body.phone.trim(),
                req.body.visit_date.trim(),
                parseInt(req.body.number_of_people, 10),
                req.ip || ''
            ]
        );
        saveDb();
        console.log('[预约成功] name=' + req.body.name.trim() + ' date=' + req.body.visit_date);
        res.status(201).json({
            success: true,
            message: '预约成功！请按时前来参观。'
        });
    } catch (err) {
        console.error('数据库错误:', err.message);
        res.status(500).json({
            success: false,
            message: '服务器错误，请稍后重试。'
        });
    }
});

// GET: 查询所有工艺体验报名
app.get('/api/craft-registrations', function(req, res) {
    try {
        var results = db.exec('SELECT id, name, email, phone, message, created_at FROM craft_registrations ORDER BY id DESC');
        var rows = (results.length > 0) ? results[0].values.map(function(row) {
            return {
                id: row[0],
                name: row[1],
                email: row[2],
                phone: row[3],
                message: row[4],
                created_at: row[5]
            };
        }) : [];
        res.json({ success: true, data: rows });
    } catch (err) {
        console.error('查询报名数据失败:', err.message);
        res.status(500).json({ success: false, message: '查询失败' });
    }
});

// GET: 查询所有展览参观预约
app.get('/api/exhibition-bookings', function(req, res) {
    try {
        var results = db.exec('SELECT id, name, phone, visit_date, number_of_people, created_at FROM exhibition_bookings ORDER BY id DESC');
        var rows = (results.length > 0) ? results[0].values.map(function(row) {
            return {
                id: row[0],
                name: row[1],
                phone: row[2],
                visit_date: row[3],
                number_of_people: row[4],
                created_at: row[5]
            };
        }) : [];
        res.json({ success: true, data: rows });
    } catch (err) {
        console.error('查询预约数据失败:', err.message);
        res.status(500).json({ success: false, message: '查询失败' });
    }
});

// DELETE: 删除一条工艺体验报名
app.delete('/api/craft-registrations/:id', function(req, res) {
    try {
        var id = parseInt(req.params.id, 10);
        console.log('[删除请求] 类型=报名 原始ID=' + req.params.id + ' 解析后=' + id);
        if (isNaN(id) || id < 1) {
            return res.status(400).json({ success: false, message: '无效的ID' });
        }
        db.run('DELETE FROM craft_registrations WHERE id = ?', [id]);
        var rowsAffected = db.getRowsModified();
        saveDb();
        console.log('[删除报名] id=' + id + ' 影响行数=' + rowsAffected);
        if (rowsAffected > 0) {
            res.json({ success: true, message: '删除成功' });
        } else {
            res.status(404).json({ success: false, message: '记录不存在（ID=' + id + '）' });
        }
    } catch (err) {
        console.error('删除报名数据失败:', err.message);
        res.status(500).json({ success: false, message: '删除失败' });
    }
});

// DELETE: 删除一条展览参观预约
app.delete('/api/exhibition-bookings/:id', function(req, res) {
    try {
        var id = parseInt(req.params.id, 10);
        console.log('[删除请求] 类型=预约 原始ID=' + req.params.id + ' 解析后=' + id);
        if (isNaN(id) || id < 1) {
            return res.status(400).json({ success: false, message: '无效的ID' });
        }
        db.run('DELETE FROM exhibition_bookings WHERE id = ?', [id]);
        var rowsAffected = db.getRowsModified();
        saveDb();
        console.log('[删除预约] id=' + id + ' 影响行数=' + rowsAffected);
        if (rowsAffected > 0) {
            res.json({ success: true, message: '删除成功' });
        } else {
            res.status(404).json({ success: false, message: '记录不存在（ID=' + id + '）' });
        }
    } catch (err) {
        console.error('删除预约数据失败:', err.message);
        res.status(500).json({ success: false, message: '删除失败' });
    }
});

// POST: 提交订单
app.post('/api/orders', function(req, res) {
    var errors = validateOrder(req.body);
    if (errors.length > 0) {
        return res.status(400).json({ success: false, errors: errors });
    }

    try {
        db.run(
            'INSERT INTO orders (product_name, price, quantity, customer_name, phone, address, ip_address) VALUES (?, ?, ?, ?, ?, ?, ?)',
            [
                req.body.product_name.trim(),
                parseFloat(req.body.price) || 0,
                parseInt(req.body.quantity, 10),
                req.body.customer_name.trim(),
                req.body.phone.trim(),
                (req.body.address || '').trim(),
                req.ip || ''
            ]
        );
        saveDb();
        console.log('[下单成功] product=' + req.body.product_name + ' customer=' + req.body.customer_name.trim());
        res.status(201).json({
            success: true,
            message: '下单成功！我们会尽快安排发货。'
        });
    } catch (err) {
        console.error('订单数据库错误:', err.message);
        res.status(500).json({ success: false, message: '服务器错误，请稍后重试。' });
    }
});

// GET: 查询所有订单
app.get('/api/orders', function(req, res) {
    try {
        var results = db.exec('SELECT id, product_name, price, quantity, customer_name, phone, address, created_at FROM orders ORDER BY id DESC');
        var rows = (results.length > 0) ? results[0].values.map(function(row) {
            return {
                id: row[0],
                product_name: row[1],
                price: row[2],
                quantity: row[3],
                customer_name: row[4],
                phone: row[5],
                address: row[6],
                created_at: row[7]
            };
        }) : [];
        res.json({ success: true, data: rows });
    } catch (err) {
        console.error('查询订单数据失败:', err.message);
        res.status(500).json({ success: false, message: '查询失败' });
    }
});

// DELETE: 删除一个订单
app.delete('/api/orders/:id', function(req, res) {
    try {
        var id = parseInt(req.params.id, 10);
        if (isNaN(id) || id < 1) {
            return res.status(400).json({ success: false, message: '无效的ID' });
        }
        db.run('DELETE FROM orders WHERE id = ?', [id]);
        var rowsAffected = db.getRowsModified();
        saveDb();
        if (rowsAffected > 0) {
            console.log('[删除订单] id=' + id);
            res.json({ success: true, message: '删除成功' });
        } else {
            res.status(404).json({ success: false, message: '记录不存在' });
        }
    } catch (err) {
        console.error('删除订单失败:', err.message);
        res.status(500).json({ success: false, message: '删除失败' });
    }
});

// ---- 启动 ----
initSqlJs().then(function(SQL) {
    // 加载已有数据库或创建新数据库
    try {
        var fileBuffer = fs.readFileSync(DB_PATH);
        db = new SQL.Database(fileBuffer);
        console.log('已加载数据库: ' + DB_PATH);
    } catch (err) {
        db = new SQL.Database();
        console.log('已创建新数据库');
    }

    // 确保表存在
    createTables();

    // 启动服务器
    var server = app.listen(PORT, function() {
        console.log('========================================');
        console.log('湖口草龙博物馆 API 服务器已启动');
        console.log('网站首页: http://localhost:' + PORT);
        console.log('后台管理: http://localhost:' + PORT + '/admin.html');
        console.log('========================================');
    });

    server.on('error', function(err) {
        if (err.code === 'EADDRINUSE') {
            console.error('========================================');
            console.error('错误：端口 ' + PORT + ' 已被占用');
            console.error('请先关闭占用该端口的程序，或使用其他端口：');
            console.error('  set PORT=3001 && npm start');
            console.error('========================================');
        } else {
            console.error('服务器启动失败:', err.message);
        }
        process.exit(1);
    });

    // 优雅关闭
    process.on('SIGINT', function() {
        console.log('\n正在关闭服务器...');
        saveDb();
        db.close();
        process.exit(0);
    });
}).catch(function(err) {
    console.error('初始化 sql.js 失败:', err);
    process.exit(1);
});
